import type { ReactNode } from 'react'
import { Flex } from '../atom'
import type { TCaseKey, TColor } from '../../type'

export const DashboardTB = ({
  children,
  index,
  name,
}: {
  children?: ReactNode
  index: number
  name?: TCaseKey
}) => {
  /* backgroundColor={
    caseItem[] === 'High' ? 'carmine' : 'denim'
  } */
  let badgeBackgroundColor: TColor = 'transparent'
  let color: TColor = 'pickled-bluewood'

  if (name === 'priority') {
    badgeBackgroundColor = index % 2 ? 'carmine' : 'denim'
    color = 'white'
  } else if (name === 'status') {
    badgeBackgroundColor = 'mulled-wine'
    color = 'white'
  } else if (name === 'type') {
    badgeBackgroundColor = 'white'
    color = 'lynch'
  }

  return (
    <Flex
      backgroundColor={index % 2 ? 'link-water' : 'transparent'}
      color={'pickled-bluewood'}
      padding={16}
      height="100%"
    >
      {badgeBackgroundColor === 'transparent' ? (
        <Flex
          fontSize={14}
          fontWeight={name === 'description' ? 400 : 500}
          width={name === 'description' ? '100%' : 'auto'}
          minWidth={name === 'description' ? 392 : 'auto'}
        >
          {children}
        </Flex>
      ) : (
        <Flex
          height={24}
          padding={[0, 8]}
          color={color}
          alignItems="center"
          borderRadius={24}
          backgroundColor={badgeBackgroundColor}
          borderColor={name === 'type' ? color : badgeBackgroundColor}
          borderWidth={1}
          fontSize={10}
          textTransform="uppercase"
          whiteSpace="preserve nowrap"
          letterSpacing="0.05em"
        >
          {children}
        </Flex>
      )}
    </Flex>
  )
}
