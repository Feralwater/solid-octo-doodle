import React, { ChangeEvent, forwardRef } from 'react';
import { CheckboxProps } from './Checkbox.interface';
import {
  Checkmark, CheckmarkContainer, StyledCheckbox, StyledLabel,
} from './Checkbox.styles';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  id, label, ...restProps
}, ref) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked);

  return (
    <StyledLabel htmlFor={id}>
      <StyledCheckbox
        id={id}
        type="checkbox"
        ref={ref}
        {...restProps}
        onChange={handleChange}
      />
      <CheckmarkContainer>
        <Checkmark checked={checked} />
      </CheckmarkContainer>
      {label}
    </StyledLabel>
  );
});
