import { useEffect } from 'react'
import type { ChangeEvent } from 'react'
import { Flex } from '../../atom'
import './dropdown-input.css'
import type { TCaseKey } from '../../../type'
import { Checkbox } from '../checkbox'
import { useCaseStore } from '../../../store'

export const DropDownCheckboxList = ({
  list,
  showDropDown,
}: {
  list: {
    name: TCaseKey
    span: string
    label: string
  }[]
  showDropDown?: boolean
}) => {
  const { setCheckedMap, columnMap } = useCaseStore()

  // biome-ignore lint: lint/correctness/useExhaustiveDependencies
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const columnCheckedMap = JSON.parse(
        window.localStorage.getItem('columnCheckedList') || '{}'
      )

      if (Object.keys(columnCheckedMap).length > 0) {
        setCheckedMap(columnCheckedMap)
      } else {
        const checkedInitialMap = list.reduce((a, c) => {
          a[c.name] = true
          return a
        }, {} as Record<TCaseKey, boolean>)
        window.localStorage.setItem(
          'columnCheckedList',
          JSON.stringify(checkedInitialMap)
        )
        setCheckedMap(checkedInitialMap)
      }
    }
    // eslint-disable-next-line
  }, [])

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target
    const newMap = {
      ...columnMap,
      [name]: checked,
    }
    setCheckedMap(newMap)
    window.localStorage.setItem('columnCheckedList', JSON.stringify(newMap))
  }

  return showDropDown ? (
    <Flex
      flexDirection="column"
      position="absolute"
      backgroundColor="white"
      shadow
      padding={[5, 0]}
      inset="100% 0 auto auto"
    >
      <form action="">
        {list.map(({ name, label }) => (
          <Flex key={name} padding={[10, 16]} alignItems="center">
            <Checkbox
              name={name}
              id={`dropdown-checked-input-${name}`}
              value={name}
              onChange={handleCheckboxChange}
              checked={columnMap[name]}
            />

            <Flex
              as="label"
              htmlFor={`dropdown-checked-input-${name}`}
              whiteSpace="preserve nowrap"
              padding={[0, 10]}
              height={28}
              alignItems="center"
              width="100%"
              cursor="pointer"
            >
              {label}
            </Flex>
          </Flex>
        ))}
      </form>
    </Flex>
  ) : null
}
