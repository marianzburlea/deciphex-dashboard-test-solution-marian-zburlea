import { Fragment, useEffect } from 'react'
import type { ChangeEvent, MouseEvent } from 'react'
import { useCaseStore } from '../../store'
import type { TCase, TCaseKey } from '../../type'
import { Flex, Grid } from '../atom'
import { ButtonDropdown, Checkbox } from '../molecule'
import { useLocation } from 'react-router-dom'
import { DashboardFooter } from './dashboard-footer'
import { DashboardHeader } from './dashboard-header'
import { DashboardTH } from './dashboard-th'
import { DashboardTB } from './dashboard-tb'
import { dashboardHeaderList } from './dashboard-header-list'

const singleDropDownList = [
  { value: 'Accepted', label: 'Accept case' },
  { value: 'Rejected', label: 'Reject case' },
]

export const Dashboard = ({ status }: { status?: TCase['status'] }) => {
  const location = useLocation()

  const {
    caseData,
    setCaseSelect,
    caseSelectList,
    setCasePartialSelect,
    setCaseCurentPage,
    getCasePage,
    columnMap,
  } = useCaseStore()

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    getCasePage(status || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const handleCaseSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (value === 'all') {
      setCasePartialSelect()
    } else {
      setCaseSelect(value)
    }
  }

  const partial =
    caseSelectList.length > 0 && caseSelectList.length !== caseData.list.length
  const full =
    caseSelectList.length > 0 && caseSelectList.length === caseData.list.length

  const max = Math.ceil(caseData.total / caseData.limit)
  const showNext = caseData.page < max
  const showPrev = caseData.page > 1

  const handlePage = (e: MouseEvent<HTMLButtonElement>) => {
    const { direction = '' } = (e.target as HTMLButtonElement).dataset

    if (direction) {
      let page = caseData.page

      if (direction === 'next') {
        if (page < max) {
          page = page + 1
        }
      }

      if (direction === 'prev') {
        if (page > 1) {
          page = page - 1
        }
      }

      setCaseCurentPage(Number(page))
    }
  }

  const handleSetPage = (e: ChangeEvent<HTMLInputElement>) => {
    const page = Number(e.target.value)
    if (page <= max && page > 0) {
      setCaseCurentPage(page)
    }
  }

  const showColumnList = (Object.keys(columnMap || {}) as TCaseKey[]).filter(
    (name) => columnMap[name]
  )

  const showDashboardHeaderList = dashboardHeaderList.filter(({ name }) =>
    showColumnList.includes(name)
  )

  const leftGridMessage = `${(caseData.page - 1) * caseData.limit + 1}-${
    caseData.page !== max ? caseData.page * caseData.limit : caseData.total
  } of ${caseData.total} cases`

  return (
    <Flex flexDirection="column" gap={24} padding={[24, 36]}>
      <h1>{`${status || 'All'} cases`}</h1>

      <DashboardHeader />

      <Grid
        gridTemplateColumns={`auto ${showDashboardHeaderList
          .map(({ span }) => span)
          .join(' ')} auto`}
      >
        <DashboardTH>
          <Checkbox
            name="all"
            partial={partial}
            checked={full}
            onChange={handleCaseSelect}
            value="all"
          />
        </DashboardTH>

        {showDashboardHeaderList.map(({ label, name }) => (
          <DashboardTH key={name} name={name}>
            {label}
          </DashboardTH>
        ))}

        <DashboardTH>Action</DashboardTH>

        {caseData.list.map((caseItem, index) => (
          <Fragment key={caseItem.caseName}>
            <DashboardTB index={index}>
              <Checkbox
                name="case-select[]"
                checked={caseSelectList.includes(caseItem.caseName)}
                onChange={handleCaseSelect}
                value={caseItem.caseName}
              />
            </DashboardTB>

            {showDashboardHeaderList.map(({ name }) => (
              <DashboardTB key={name} name={name} index={index}>
                {caseItem[name]}
              </DashboardTB>
            ))}

            <DashboardTB index={index}>
              <ButtonDropdown
                name={caseItem.caseName}
                list={singleDropDownList}
              />
            </DashboardTB>
          </Fragment>
        ))}
      </Grid>

      <DashboardFooter
        leftGridMessage={leftGridMessage}
        showNext={showNext}
        showPrev={showPrev}
        max={max}
        page={caseData.page}
        handlePage={handlePage}
        handleSetPage={handleSetPage}
      />
    </Flex>
  )
}
