import type { InputHTMLAttributes } from 'react'
import type { TPaddingValue } from '../../../type'

export type TInput = {
  id?: string
  padding?: TPaddingValue
  data?: Record<string, string | number | boolean>
  width?: string | number
  height?: string | number
  borderRadius?: number
} & InputHTMLAttributes<HTMLInputElement>

// avoid extra invalid html tag attributes using $ in styled-components
export type $TInput = {
  $padding?: TPaddingValue
  $width?: string | number
  $height?: string | number
  $borderRadius?: number
}
