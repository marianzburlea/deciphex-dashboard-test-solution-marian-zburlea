import { SFlex } from './flex.style'
import type { TFlex } from './flex.type'

export const Flex = ({
  as = 'div',
  backgroundColor,
  children,
  color,
  flexDirection,
  gap,
  height,
  padding,
  width,
  minWidth,
  alignItems,
  justifyContent,
  fontWeight,
  textTransform,
  fontSize,
  borderRadius,
  borderWidth,
  borderColor,
  position,
  inset,
  shadow,
  whiteSpace,
  cursor,
  letterSpacing,
  ...rest
}: TFlex) => {
  return (
    <SFlex
      as={as}
      $backgroundColor={backgroundColor}
      $color={color}
      $flexDirection={flexDirection}
      $gap={gap}
      $padding={padding}
      $width={width}
      $minWidth={minWidth}
      $height={height}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $fontWeight={fontWeight}
      $textTransform={textTransform}
      $fontSize={fontSize}
      $borderRadius={borderRadius}
      $borderWidth={borderWidth}
      $borderColor={borderColor}
      $position={position}
      $inset={inset}
      $shadow={shadow}
      $whiteSpace={whiteSpace}
      $cursor={cursor}
      $letterSpacing={letterSpacing}
      {...rest}
    >
      {children}
    </SFlex>
  )
}
