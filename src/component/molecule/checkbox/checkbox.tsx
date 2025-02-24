import { Flex, Icon } from '../../atom'
import { SCheckboxInput } from './checkbox.style'
import type { TCheckbox } from './checkbox.type'

export const Checkbox = ({
  name,
  checked,
  partial,
  onChange,
  value,
  id,
}: TCheckbox) => {
  return (
    <Flex
      width={20}
      height={20}
      backgroundColor={checked || partial ? 'blue-ribbon' : 'transparent'}
      color={checked || partial ? 'white' : 'blue-ribbon'}
      alignItems="center"
      justifyContent="center"
      borderRadius={3}
      borderWidth={checked || partial ? 0 : 1}
    >
      {(partial || checked) && (
        <Icon
          name={partial ? 'partial' : 'ok'}
          width={16}
          height={16}
          fontSize={12}
        />
      )}

      <SCheckboxInput
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        value={value}
      />
    </Flex>
  )
}
