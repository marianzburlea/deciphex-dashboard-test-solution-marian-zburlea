import type { AllHTMLAttributes, ReactNode } from 'react'
import type {
  TAlignItems,
  TColor,
  TCursor,
  TFlexDirection,
  TFontWeight,
  TFontWeightValue,
  TGap,
  TJustifyContent,
  TLetterSpacing,
  TPaddingValue,
  TPosition,
  TTextTransform,
  TWhiteSpace,
} from '../../../type'

export type TFlex = {
  children?: ReactNode
  padding?: TPaddingValue
  flexDirection?: TFlexDirection
  as?: 'div' | 'nav' | 'label' | 'span'
  gap?: TGap
  color?: TColor
  backgroundColor?: TColor
  borderColor?: TColor
  width?: string | number
  minWidth?: string | number
  height?: string | number
  alignItems?: TAlignItems
  justifyContent?: TJustifyContent
  fontWeight?: TFontWeight | TFontWeightValue
  fontSize?: string | number
  textTransform?: TTextTransform
  borderRadius?: number
  borderWidth?: number
  inset?: string
  position?: TPosition
  shadow?: boolean
  whiteSpace?: TWhiteSpace
  cursor?: TCursor
  letterSpacing?: TLetterSpacing
} & AllHTMLAttributes<HTMLElement>

// avoid extra invalid html tag attributes using $ in styled-components
export type $TFlex = {
  $borderWidth?: number
  $borderRadius?: number
  $inset?: string
  $width?: string | number
  $minWidth?: string | number
  $height?: string | number
  $color?: TColor
  $backgroundColor?: TColor
  $borderColor?: TColor
  $padding?: TPaddingValue
  $gap?: TGap
  $flexDirection?: TFlexDirection
  $alignItems?: TAlignItems
  $justifyContent?: TJustifyContent
  $fontWeight?: TFontWeight | TFontWeightValue
  $textTransform?: TTextTransform
  $fontSize?: string | number
  $position?: TPosition
  $shadow?: boolean
  $whiteSpace?: TWhiteSpace
  $cursor?: TCursor
  $letterSpacing?: TLetterSpacing
}
