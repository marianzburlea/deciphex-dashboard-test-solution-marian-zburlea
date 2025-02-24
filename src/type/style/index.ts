export type TFlexDirection = 'row' | 'column'
export type TGap = number | string
export type TPaddingValue = number | number[]
export type TColor =
  | 'blue-ribbon'
  | 'pickled-bluewood'
  | 'link-water'
  | 'lynch'
  | 'otticelli'
  | 'denim'
  | 'carmine'
  | 'zumthor'
  | 'dodger-blue'
  | 'mulled-wine'
  | 'wild-blue-yonder'
  | 'smalt'
  | 'white'
  | 'transparent'

// font weight
export const fontWeightMap = {
  thin: 100, // Thinnest weight, very light
  extralight: 200, // Extra light
  light: 300, // Light
  normal: 400, // Normal (regular)
  medium: 500, // Medium
  semibold: 600, // Semi-bold
  bold: 700, // Bold
  extrabold: 800, // Extra bold
  black: 900, // Black (heaviest)
} as const

export type TFontWeight = keyof typeof fontWeightMap
export type TFontWeightValue =
  (typeof fontWeightMap)[keyof typeof fontWeightMap]

export type TAlignItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'anchor-center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | `safe ${'start' | 'center' | 'end' | 'flex-start' | 'flex-end'}`
  | `unsafe ${'start' | 'center' | 'end' | 'flex-start' | 'flex-end'}`

export type TJustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | `safe ${'center' | 'start' | 'end' | 'left' | 'right'}`
  | `unsafe ${'center' | 'start' | 'end' | 'left' | 'right'}`

export type TTextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana'
  | 'math-auto'

export type TPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'

export type TWhiteSpace =
  | 'normal'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | 'wrap'
  | 'collapse'
  | `${'preserve'} ${'nowrap' | 'wrap'}`

export type TCursor =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'zoom-in'
  | 'zoom-out'

export type TLetterSpacing =
  | 'normal'
  | number
  | `${number}px`
  | `${number}em`
  | `${number}rem`
