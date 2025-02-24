import { SLink } from './link.style'
import type { TLink } from './link.type'
import { Link as RouterLink } from 'react-router'

export const Link = ({
  padding = [8, 16],
  children,
  color,
  backgroundColor,
  backgroundHoverColor,
  href,
  title,
  height,
  width,
  gap,
  fontSize,
  fontWeight,
}: TLink) => {
  return (
    <RouterLink to={href} title={title}>
      <SLink
        $height={height}
        $width={width}
        $gap={gap}
        $padding={padding}
        $color={color}
        $fontWeight={fontWeight}
        $fontSize={fontSize}
        $backgroundColor={backgroundColor}
        $backgroundHoverColor={backgroundHoverColor}
      >
        {children}
      </SLink>
    </RouterLink>
  )
}
