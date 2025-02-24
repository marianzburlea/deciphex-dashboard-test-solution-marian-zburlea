import type { TPaddingValue } from '../../../type'

export const getPadding = ({ $padding }: { $padding?: TPaddingValue }) => {
  if ($padding) {
    const paddingList = Array.isArray($padding)
      ? $padding.slice(0, 4)
      : [$padding]

    return `padding: ${paddingList
      .map((padValue) => `${padValue / 16}rem`)
      .join(' ')};`
  }

  return ''
}
