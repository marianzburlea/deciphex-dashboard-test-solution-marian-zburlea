import type { ReactNode } from 'react'
import { Button, Flex, Icon } from '../atom'
import { useCaseStore } from '../../store'
import type { TCaseKey } from '../../type'

export const DashboardTH = ({
  children,
  name,
}: {
  children?: ReactNode
  name?: TCaseKey
}) => {
  const { setSort, sort } = useCaseStore()
  const handleSort = () => {
    if (name) {
      setSort(name)
    }
  }

  return (
    <Flex
      backgroundColor="link-water"
      textTransform="uppercase"
      fontSize={12}
      color="lynch"
      padding={[0, 16]}
      height={40}
      alignItems="center"
      onClick={handleSort}
      cursor={
        sort.column === name && sort.order === 'asc' ? 'n-resize' : 's-resize'
      }
      letterSpacing="0.05em"
      fontWeight={600}
    >
      {children}

      {sort.column === name && (
        <Button disabled backgroundColor="transparent">
          <Icon name="arrow" rotate={sort.order === 'asc' ? 0 : 180} />
        </Button>
      )}
    </Flex>
  )
}
