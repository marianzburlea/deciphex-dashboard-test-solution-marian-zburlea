import type {
  TAlignItems,
  TColor,
  TCursor,
  TFlexDirection,
  TJustifyContent,
  TLetterSpacing,
  TPosition,
  TTextTransform,
  TWhiteSpace,
} from '../../../type'

export const getWhiteSpace = ({ $whiteSpace }: { $whiteSpace?: TWhiteSpace }) =>
  $whiteSpace ? `white-space: ${$whiteSpace};` : ''

export const getShadow = ({ $shadow }: { $shadow?: boolean }) =>
  $shadow
    ? 'box-shadow: 0 2px 5px #5960781a, 0 0 0 1px #464f6029, 0 1px 1px #0000001a;'
    : ''

export const getBorderRadius = ({
  $borderRadius,
}: {
  $borderRadius?: number
}) => ($borderRadius ? `border-radius: ${$borderRadius / 16}rem;` : '')

export const getPosition = ({ $position }: { $position?: TPosition }) =>
  $position ? `position: ${$position};` : ''

export const getInset = ({ $inset }: { $inset?: string }) =>
  $inset ? `inset: ${$inset};` : ''

export const getBorder = ({
  $borderWidth,
  $borderColor,
  $color,
}: {
  $borderWidth?: number
  $borderColor?: TColor
  $color?: TColor
}) =>
  $borderWidth
    ? `border: ${$borderWidth / 16}rem solid var(--${$borderColor || $color});`
    : ''

export const getFlexDirection = ({
  $flexDirection,
}: {
  $flexDirection?: TFlexDirection
}) => ($flexDirection ? `flex-direction: ${$flexDirection};` : '')

export const getCursor = ({ $cursor }: { $cursor?: TCursor }) =>
  $cursor ? `cursor: ${$cursor};` : ''

export const getLetterSpacing = ({
  $letterSpacing,
}: {
  $letterSpacing?: TLetterSpacing
}) => ($letterSpacing ? `letter-spacing: ${$letterSpacing};` : '')

export const getAlignItems = ({ $alignItems }: { $alignItems?: TAlignItems }) =>
  $alignItems ? `align-items: ${$alignItems};` : ''

export const getTextTransform = ({
  $textTransform,
}: {
  $textTransform?: TTextTransform
}) => ($textTransform ? `text-transform: ${$textTransform};` : '')

export const getJustifyContent = ({
  $justifyContent,
}: {
  $justifyContent?: TJustifyContent
}) => ($justifyContent ? `justify-content: ${$justifyContent};` : '')
