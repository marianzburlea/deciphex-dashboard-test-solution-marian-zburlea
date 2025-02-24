import type { TIconName } from '../../../type'
import { Icon, Link } from '../../atom'
import type { TIconLink } from './icon-link.type'

export const IconLink = ({
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
  icon,
}: TIconLink & { icon?: TIconName }) => {
  return (
    <Link
      href={href}
      title={title}
      height={height}
      width={width}
      gap={gap}
      padding={padding}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
    >
      {icon && <Icon name={icon} width={20} height={20} fontSize={20} />}

      {children}
    </Link>
  )
}
