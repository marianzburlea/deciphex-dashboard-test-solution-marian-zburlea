import type { ReactNode } from 'react'
import type { TColor, TGap, TPaddingValue } from '../../../type'

export type TGrid = {
  children?: ReactNode
  padding?: TPaddingValue
  as?: 'div' | 'nav' | 'main'
  gap?: TGap
  gridTemplateColumns?: string
  color?: TColor
  backgroundColor?: TColor
  width?: string | number
  height?: string | number
}

// avoid extra invalid html tag attributes using $ in styled-components
export type $TGrid = {
  $padding?: TPaddingValue
  $gridTemplateColumns?: string
  $gap?: TGap
  $color?: TColor
  $backgroundColor?: TColor
  $width?: string | number
  $height?: string | number
}
