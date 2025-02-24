import type { ChangeEvent, MouseEvent } from 'react'
import { Button, Flex, Icon, Input } from '../atom'

export const DashboardFooter = ({
  leftGridMessage,
  handlePage,
  max,
  showNext,
  showPrev,
  handleSetPage,
  page,
}: {
  leftGridMessage: string
  page: number
  showPrev: boolean
  showNext: boolean
  max: number
  handlePage: (e: MouseEvent<HTMLButtonElement>) => void
  handleSetPage: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <Flex justifyContent="space-between">
      <Flex>{leftGridMessage}</Flex>

      <Flex>&nbsp;</Flex>

      <Flex gap={10}>
        {showPrev && (
          <Button showBorder shadow data-direction="prev" onClick={handlePage}>
            <Icon name="chevron" rotate={180} />
          </Button>
        )}

        <Flex gap={4} alignItems="center">
          <Input
            type="number"
            min={1}
            max={max}
            onChange={handleSetPage}
            value={page}
            borderRadius={6}
            width={64}
            height={40}
          />
          /{max}
        </Flex>

        {showNext && (
          <Button showBorder shadow data-direction="next" onClick={handlePage}>
            <Icon name="chevron" />
          </Button>
        )}
      </Flex>
    </Flex>
  )
}
