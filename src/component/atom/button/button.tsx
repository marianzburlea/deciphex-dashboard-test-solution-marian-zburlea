import { SButton } from './button.style'
import type { TButton } from './button.type'

export const Button = ({
  padding = [0, 16],
  label,
  children,
  shadow,
  width,
  height,
  color,
  backgroundColor,
  highlight,
  showBorder,
  ...rest
}: TButton) => {
  return (
    <SButton
      type="button"
      $padding={padding}
      $shadow={shadow}
      $width={width}
      $height={height}
      $color={color}
      $highlight={highlight}
      $showBorder={showBorder}
      $backgroundColor={backgroundColor}
      {...rest}
    >
      <span>{label || children}</span>
    </SButton>
  )
}
