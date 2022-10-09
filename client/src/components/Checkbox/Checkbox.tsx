import React, { forwardRef } from 'react';
import { CheckboxProps } from './Checkbox.interface';
import {
  Checkmark, CheckmarkContainer, StyledCheckbox, StyledLabel,
} from './Checkbox.styles';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  id, label, checked, ...restProps
}, ref) => (
  <StyledLabel htmlFor={id}>
    <StyledCheckbox
      id={id}
      type="checkbox"
      ref={ref}
      {...restProps}
    />
    <CheckmarkContainer>
      <Checkmark checked={checked} />
    </CheckmarkContainer>
    {label}
  </StyledLabel>
));
