import { SGrid } from './grid.style'
import type { TGrid } from './grid.type'

export const Grid = ({
  backgroundColor,
  children,
  color,
  gap,
  gridTemplateColumns,
  height,
  padding,
  as = 'div',
  width,
}: TGrid) => {
  return (
    <SGrid
      as={as}
      $backgroundColor={backgroundColor}
      $color={color}
      $gap={gap}
      $gridTemplateColumns={gridTemplateColumns}
      $padding={padding}
      $width={width}
      $height={height}
    >
      {children}
    </SGrid>
  )
}
