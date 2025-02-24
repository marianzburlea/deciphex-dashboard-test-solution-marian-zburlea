import type { TFontWeight, TFontWeightValue } from '../../../type'

export const getFontSize = ({ $fontSize }: { $fontSize?: string | number }) => {
  if ($fontSize) {
    const fontSize =
      typeof $fontSize === 'string' ? $fontSize : `${$fontSize / 16}rem`
    return `font-size: ${fontSize};`
  }

  return ''
}

export const getFontWeight = ({
  $fontWeight,
}: {
  $fontWeight?: TFontWeight | TFontWeightValue
}) => ($fontWeight ? `font-weight: ${$fontWeight};` : '')
