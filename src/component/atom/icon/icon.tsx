import { SIcon } from './icon.style'
import type { TIcon } from './icon.type'

export const Icon = ({ name, height, width, fontSize, rotate }: TIcon) => (
  <SIcon
    $height={height}
    $width={width}
    $name={name}
    $fontSize={fontSize}
    $rotate={rotate}
  />
)
