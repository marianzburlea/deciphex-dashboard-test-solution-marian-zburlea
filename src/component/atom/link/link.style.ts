import styled from 'styled-components'
import type { $TLink } from './link.type'
import {
  getBackgroundColor,
  getBackgroundHoverColor,
  getColor,
  getFontSize,
  getFontWeight,
  getGap,
  getHeight,
  getPadding,
  getWidth,
} from '../../util'

export const SLink = styled.span<$TLink>`
  transition: 250ms;

  &::first-letter {
    text-transform: capitalize;
  }

  cursor: pointer;
  display: flex;
  align-items: center;

  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  &:hover {
    ${getBackgroundHoverColor}
  }

  ${getGap}
  ${getPadding}
  ${getHeight}
  ${getWidth}
  ${getFontSize}
  ${getFontWeight}
  ${getColor}
  ${getBackgroundColor}
`
