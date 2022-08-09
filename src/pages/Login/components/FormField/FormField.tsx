import { Control, Controller, FieldErrors } from 'react-hook-form';
import React from 'react';
import { Input } from 'components';
import { ErrorBubble, InputContainer } from 'pages/Login/components/FormField/FormField.styles';
import { InputsProps } from 'pages/Login/components/LoginForm/LoginForm.interface';

interface FormFieldProps {
  control: Control<InputsProps>
  errors: FieldErrors<InputsProps>
  name: 'email' | 'password'
  type: 'email' | 'password'
  label: string
  id: string
}

export const FormField = (
  {
    control,
    errors,
    id,
    label,
    name,
    type,
  }: FormFieldProps,
) => (
  <InputContainer>
    <Controller
      name={name}
      rules={{ required: true }}
      control={control}
      render={({ field }) => (
        <Input
          inputSize="small"
          label={label}
          id={id}
          type={type}
          name={field.name}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
    {errors[name] && <ErrorBubble>This field is required</ErrorBubble>}
  </InputContainer>
);
