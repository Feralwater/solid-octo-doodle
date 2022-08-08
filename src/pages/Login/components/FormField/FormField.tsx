import { Control, Controller, FieldErrors } from 'react-hook-form';
import React from 'react';
import { InputsProps } from 'pages/Login/components/LoginForm/LoginForm';
import { Input } from 'components';
import { ErrorBubble, InputContainer } from 'pages/Login/components/FormField/FormField.styles';

interface FormFieldProps {
  control: Control<InputsProps>
  errors: FieldErrors<InputsProps>
  name: 'email' | 'password'
  type: 'email' | 'password'
  label: string
  id: string
  placeholder: string
}

export const FormField = (
  {
    control,
    errors,
    id,
    placeholder,
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
          placeholder={placeholder}
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
