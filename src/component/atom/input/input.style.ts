import styled from 'styled-components'
import type { $TInput } from './input.type'
import { getBorderRadius, getHeight, getPadding, getWidth } from '../../util'

export const SInput = styled.input<$TInput>`
  box-shadow: 0 2px 5px #5960781a, 0 0 0 1px #464f6029, 0 1px 1px #0000001a;
  border: 0;

  ${getWidth}
  ${getHeight}
  ${getPadding}
  ${getBorderRadius}
`
