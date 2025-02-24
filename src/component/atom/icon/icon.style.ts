import styled from 'styled-components'
import type { $TIcon } from './icon.type'
import { getFontSize, getHeight, getRotate, getWidth } from '../../util'

export const SIcon = styled.span<$TIcon>`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */

  font-family: var(--deciphex-font-family) !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-self: center;
  justify-self: center;
  transition: 150ms;

  &::before {
    content: var(--deciphex-font-${({ $name }) => $name});
  }

  ${getRotate}
  ${getWidth}
  ${getFontSize}
  ${getHeight}
`
