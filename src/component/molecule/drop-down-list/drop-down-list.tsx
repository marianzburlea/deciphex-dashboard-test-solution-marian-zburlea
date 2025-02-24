import { useEffect, useRef } from 'react'
import type { FormEvent, MouseEvent } from 'react'
import { Flex } from '../../atom'
import './dropdown-input.css'
import { useCaseStore } from '../../../store'

export const DropDownList = ({
  list,
  listenForClick,
  showDropDown,
  name,
}: {
  name: string
  listenForClick: (e: MouseEvent<HTMLButtonElement>) => void
  list: {
    value: string
    label: string
  }[]
  showDropDown?: boolean
}) => {
  const { setStatus } = useCaseStore()

  const refResetRadio = useRef<HTMLInputElement>(null)
  const refSubmit = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (refResetRadio.current) {
      refResetRadio.current.focus()
    }
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    ) as { caseName: string; status: string }
    setStatus(data)

    setTimeout(() => {
      listenForClick(e as unknown as MouseEvent<HTMLButtonElement>)
    }, 0)
  }

  const handleLabelClick = () => {
    setTimeout(() => {
      if (refSubmit.current) {
        refSubmit.current.click()
      }
    }, 100)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <Flex
        flexDirection="column"
        position={showDropDown ? 'relative' : 'static'}
        backgroundColor="white"
        shadow
        padding={[5, 0]}
      >
        <input type="hidden" name="caseName" defaultValue={name} />
        <input
          ref={refResetRadio}
          name="status"
          type="radio"
          defaultValue=""
          defaultChecked
          className="dropdown-input"
        />

        {list.map(({ value, label }) => (
          <Flex key={value}>
            <input
              className="dropdown-input"
              name="status"
              type="radio"
              id={`dropdown-input-${value}`}
              defaultValue={value}
            />

            <Flex
              as="label"
              htmlFor={`dropdown-input-${value}`}
              whiteSpace="preserve nowrap"
              padding={[0, 10]}
              height={28}
              alignItems="center"
              width="100%"
              onClick={handleLabelClick}
            >
              {label}
            </Flex>
          </Flex>
        ))}

        <button
          ref={refSubmit}
          style={{ display: 'none' }}
          tabIndex={-1}
          type="submit"
        >
          go
        </button>
      </Flex>
    </form>
  )
}
