import type { TIconName } from '../../../type'

export type TIcon = {
  name: TIconName
  width?: string | number
  height?: string | number
  fontSize?: string | number
  rotate?: number
}

export type $TIcon = {
  $rotate?: number
  $width?: string | number
  $height?: string | number
  $name?: string
  $fontSize?: string | number
}
