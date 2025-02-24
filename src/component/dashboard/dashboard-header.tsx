import { type FormEvent, useState } from 'react'
import { Button, Flex, Icon, Input } from '../atom'
import { ButtonDropdown } from '../molecule'
import { useCaseStore } from '../../store'
import { DropDownCheckboxList } from '../molecule/drop-down-checkbox-list'
import { dashboardHeaderList } from './dashboard-header-list'

const multipleDropDownList = [
  { value: 'Accepted', label: 'Accept cases' },
  { value: 'Rejected', label: 'Reject cases' },
]

export const DashboardHeader = () => {
  const [batchOpen, setBatchOpen] = useState(false)
  const [columnsOpen, setColumnsOpen] = useState(false)
  const { setSerchTerm, caseSelectList } = useCaseStore()

  const toggleBatchOpen = () => {
    setBatchOpen(!batchOpen)
  }

  const toggleColumnsOpen = () => {
    console.log('dasdas')
    setColumnsOpen(!columnsOpen)
  }

  const handleClose = () => {
    setBatchOpen(false)
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement))

    setSerchTerm(String(data.search))
  }

  return (
    <Flex justifyContent="space-between">
      <form action="" onSubmit={handleSearch}>
        <Flex position="relative">
          <Flex position="absolute" inset="0 auto 0 13px">
            <Icon name="search" />
          </Flex>

          <Input
            type="search"
            name="search"
            borderRadius={6}
            width={320}
            padding={[0, 80, 0, 36]}
            height={32}
          />

          <Flex position="absolute" inset="0 0 0 auto">
            <Button
              height={32}
              backgroundColor="blue-ribbon"
              color="white"
              highlight
              type="submit"
            >
              Search
            </Button>
          </Flex>
        </Flex>
      </form>

      <Flex>&nbsp;</Flex>

      <Flex gap={16}>
        <Flex position="relative">
          <Button
            height={32}
            backgroundColor={
              caseSelectList.length === 0 ? 'wild-blue-yonder' : 'blue-ribbon'
            }
            color="white"
            highlight
            onClick={toggleBatchOpen}
            disabled={caseSelectList.length === 0}
          >
            <Flex as="span" gap={8} alignItems="center">
              Batch action
              <Icon
                name="arrow"
                width={20}
                height={20}
                rotate={batchOpen ? 180 : 0}
              />
            </Flex>
          </Button>

          {batchOpen && (
            <ButtonDropdown
              name="all"
              list={multipleDropDownList}
              showDrop={batchOpen}
              showMore={false}
              handleClose={handleClose}
            />
          )}
        </Flex>

        <Flex position="relative">
          <Button
            height={32}
            backgroundColor="blue-ribbon"
            color="white"
            highlight
            onClick={toggleColumnsOpen}
          >
            Columns
          </Button>

          <DropDownCheckboxList
            list={dashboardHeaderList}
            showDropDown={columnsOpen}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
