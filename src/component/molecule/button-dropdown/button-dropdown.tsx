import { type MouseEvent, useCallback, useState } from 'react'
import { Button, Flex, Icon } from '../../atom'
import { DropDownList } from '../drop-down-list'

export const ButtonDropdown = ({
  list,
  name,
  showDrop = false,
  showMore = true,
  handleClose,
}: {
  handleClose?: () => void
  showDrop?: boolean
  showMore?: boolean
  name: string
  list: {
    value: string
    label: string
  }[]
}) => {
  const [showDropDown, setShowDropdown] = useState(showDrop)

  // biome-ignore lint: it's ok
  const listenForClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    if (!['INPUT'].includes((e.target as HTMLButtonElement).tagName)) {
      setTimeout(() => setShowDropdown(false), 0)
    }

    if (typeof handleClose === 'function') {
      handleClose()
    }
  }, [])

  const handleDowpdown = () => {
    setShowDropdown(true)
  }

  return (
    <Flex
      width={!showMore ? '100%' : 40}
      height={!showMore ? '100%' : 40}
      padding={0}
      position={!showMore ? 'absolute' : showDropDown ? 'relative' : 'static'}
    >
      {showMore && (
        <Button onClick={handleDowpdown} width={40} height={40}>
          <Icon name="more" />
        </Button>
      )}

      <Flex position="absolute" inset="100% 0 auto auto">
        {showDropDown && (
          <Flex>
            <Flex position="fixed" width="100vw" height="100vh" inset="0">
              <Button width="100vw" height="100vh" onClick={listenForClick}>
                &nbsp;
              </Button>
            </Flex>

            <DropDownList
              name={name}
              showDropDown={showDropDown}
              list={list}
              listenForClick={listenForClick}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
