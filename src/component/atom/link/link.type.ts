import type { ReactNode } from 'react'
import type {
  TColor,
  TFontWeight,
  TFontWeightValue,
  TPaddingValue,
} from '../../../type'

export type TLink = {
  href: string
  title: string
  children?: ReactNode
  padding?: TPaddingValue
  color?: TColor
  backgroundColor?: TColor
  backgroundHoverColor?: TColor
  height?: string | number
  width?: string | number
  gap?: string | number
  fontSize?: string | number
  fontWeight?: TFontWeight | TFontWeightValue
}

// avoid extra invalid html tag attributes using $ in styled-components
export type $TLink = {
  $padding?: TPaddingValue
  $color?: TColor
  $backgroundColor?: TColor
  $backgroundHoverColor?: TColor
  $height?: string | number
  $width?: string | number
  $gap?: string | number
  $fontSize?: string | number
  $fontWeight?: TFontWeight | TFontWeightValue
}
