import styled from 'styled-components'
import type { $TFlex } from './flex.type'
import {
  getAlignItems,
  getBackgroundColor,
  getBorder,
  getBorderRadius,
  getColor,
  getCursor,
  getFlexDirection,
  getFontSize,
  getFontWeight,
  getGap,
  getHeight,
  getInset,
  getJustifyContent,
  getLetterSpacing,
  getMinWidth,
  getPadding,
  getPosition,
  getShadow,
  getTextTransform,
  getWhiteSpace,
  getWidth,
} from '../../util'

export const SFlex = styled.div<$TFlex>`
  display: flex;
  transition: 250ms;

  ${getColor}
  ${getShadow}
  ${getBorderRadius}
  ${getPosition}
  ${getInset}
  ${getBorder}
  ${getBackgroundColor}
  ${getFlexDirection}
  ${getPadding}
  ${getGap}
  ${getWidth}
  ${getMinWidth}
  ${getHeight}
  ${getJustifyContent}
  ${getAlignItems}
  ${getFontWeight}
  ${getTextTransform}
  ${getFontSize}
  ${getWhiteSpace}
  ${getCursor}
  ${getLetterSpacing}
`
