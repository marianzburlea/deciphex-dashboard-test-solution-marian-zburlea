import type { TNavLink } from '../../../type'
import { Flex } from '../../atom'
import { IconLink } from '../icon-link'

export const Nav = ({
  list = [],
  pathname,
}: {
  list: TNavLink[]
  pathname: string
}) => (
  <Flex as="nav" flexDirection="column" padding={[96, 0]}>
    {list.map(({ label, path, title, icon }) => (
      <IconLink
        key={path}
        href={path}
        title={title}
        color={pathname === path ? 'white' : 'pickled-bluewood'}
        backgroundColor={pathname === path ? 'blue-ribbon' : 'transparent'}
        backgroundHoverColor={pathname === path ? undefined : 'otticelli'}
        height={56}
        width={200}
        gap={12}
        fontSize={14}
        fontWeight={500}
        icon={icon}
      >
        {label}
      </IconLink>
    ))}
  </Flex>
)
