import styled from 'styled-components'
import type { $TGrid } from './grid.type'
import {
  getBackgroundColor,
  getColor,
  getGap,
  getGridTemplateColumns,
  getHeight,
  getPadding,
  getWidth,
} from '../../util'

export const SGrid = styled.div<$TGrid>`
  display: grid;

  ${getColor}
  ${getBackgroundColor}

  ${getGap}
  ${getGridTemplateColumns}
  ${getPadding}
  ${getWidth}
  ${getHeight}
`
