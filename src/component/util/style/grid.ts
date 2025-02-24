export const getGridTemplateColumns = ({
  $gridTemplateColumns,
}: {
  $gridTemplateColumns?: string
}) =>
  $gridTemplateColumns ? `grid-template-columns: ${$gridTemplateColumns};` : ''
