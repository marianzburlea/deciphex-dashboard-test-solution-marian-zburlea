import type { TGap } from '../../../type'

export const getGap = ({ $gap }: { $gap?: TGap }) => {
  if ($gap) {
    const gap = typeof $gap === 'string' ? $gap : `${$gap / 16}rem`
    return `gap: ${gap};`
  }

  return ''
}
