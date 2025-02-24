import type { TColor } from '../../../type'

const defaultColorList = ['white', 'transparent']

export const getColor = ({ $color }: { $color?: TColor }) =>
  $color
    ? `color: ${
        defaultColorList.includes($color) ? $color : `var(--${$color})`
      };`
    : ''

export const getBackgroundColor = ({
  $backgroundColor,
}: {
  $backgroundColor?: TColor
}) =>
  $backgroundColor
    ? `background-color: ${
        defaultColorList.includes($backgroundColor)
          ? $backgroundColor
          : `var(--${$backgroundColor})`
      };`
    : ''

export const getBackgroundHoverColor = ({
  $backgroundHoverColor,
}: {
  $backgroundHoverColor?: TColor
}) =>
  $backgroundHoverColor
    ? `background-color: ${
        defaultColorList.includes($backgroundHoverColor)
          ? $backgroundHoverColor
          : `var(--${$backgroundHoverColor})`
      };`
    : ''
