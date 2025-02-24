import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { TColor, TPaddingValue } from '../../../type'

export type TButton = {
  label?: string
  padding?: TPaddingValue
  children?: ReactNode
  shadow?: boolean
  highlight?: boolean
  showBorder?: boolean
  width?: string | number
  height?: string | number
  color?: TColor
  backgroundColor?: TColor
} & ButtonHTMLAttributes<HTMLButtonElement>

// avoid extra invalid html tag attributes using $ in styled-components
export type $TButton = {
  $padding?: TPaddingValue
  $shadow?: boolean
  $showBorder?: boolean
  $highlight?: boolean
  $width?: string | number
  $height?: string | number
  $color?: TColor
  $backgroundColor?: TColor
}
