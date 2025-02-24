export const getRotate = ({ $rotate }: { $rotate?: number }) =>
  $rotate ? `transform: rotate(${$rotate}deg);` : ''

export const getWidth = ({ $width }: { $width?: string | number }) => {
  if ($width) {
    const width = typeof $width === 'string' ? $width : `${$width / 16}rem`

    return `width: ${width};`
  }
  return ''
}

export const getMinWidth = ({ $minWidth }: { $minWidth?: string | number }) => {
  if ($minWidth) {
    const width =
      typeof $minWidth === 'string' ? $minWidth : `${$minWidth / 16}rem`

    return `min-width: ${width};`
  }
  return ''
}

export const getHeight = ({ $height }: { $height?: string | number }) => {
  if ($height) {
    const height = typeof $height === 'string' ? $height : `${$height / 16}rem`

    return `height: ${height};`
  }
  return ''
}
