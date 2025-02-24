import styled from 'styled-components'
import type { $TButton } from './button.type'
import {
  getBackgroundColor,
  getColor,
  getHeight,
  getPadding,
  getShadow,
  getWidth,
} from '../../util'

export const SButton = styled.button<$TButton>`
  border-radius: 0.5rem;
  border-color: transparent;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 250ms;

  &:disabled > span {
    pointer-events: none;
  }

  &:disabled,
  &:disabled::before,
  &:disabled > span {
    /* background-color: var(--wild-blue-yonder); */
    ${({ $backgroundColor = 'wild-blue-yonder' }) =>
      getBackgroundColor({ $backgroundColor })}
  }

  &:focus,
  &:focus > span,
  &:active,
  &:active > span {
    background-color: var(--smalt);
  }

  ${({ $highlight, $padding, $backgroundColor }) =>
    $highlight
      ? `
  position: relative;
  & > span {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    top: 1px;
    border-radius: 0.45rem;

    ${getPadding({ $padding })}
    ${getBackgroundColor({ $backgroundColor })}
  }

  &::before {
    border-radius: 0.45rem;
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--dodger-blue);
  }`
      : ''}

  ${({ $showBorder }) => ($showBorder ? 'border: 1px solid black;' : '')}

  ${({ $highlight }) => ($highlight ? '' : getPadding)}
  ${getShadow}
  ${getWidth}
  ${getHeight}
  ${getColor}
  ${getBackgroundColor}
`
