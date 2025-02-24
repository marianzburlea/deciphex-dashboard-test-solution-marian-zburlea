import { SInput } from './input.style'
import type { TInput } from './input.type'

export const Input = ({
  padding = [8, 16],
  borderRadius,
  width,
  height,
  data = {},
  ...rest
}: TInput) => {
  const dataMap = Object.keys(data).reduce((a, c) => {
    a[`data-${c}`] = data[c]
    return a
  }, {} as Record<string, string | number | boolean>)

  return (
    <SInput
      type="button"
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $padding={padding}
      {...dataMap}
      {...rest}
    />
  )
}
