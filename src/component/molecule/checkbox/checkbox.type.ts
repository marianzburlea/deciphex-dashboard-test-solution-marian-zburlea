import type { ChangeEvent } from 'react'

export type TCheckbox = {
  checked?: boolean
  partial?: boolean
  name: string
  id?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export type $TCheckbox = {
  $checked?: boolean
  $partial?: boolean
}
