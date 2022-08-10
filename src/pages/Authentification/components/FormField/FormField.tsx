import { Control, Controller, FieldErrors } from 'react-hook-form';
import React from 'react';
import { Input } from 'components';
import { ErrorBubble, InputContainer } from 'pages/Authentification/components/FormField/FormField.styles';
import { ISignInInputs } from 'pages/Authentification/components/SignInForm/SignInForm.interface';
import { ISignUpInputs } from 'pages/Authentification/components/SignUpForm/SignUpForm.interface';

interface FormFieldProps {
  control: Control<ISignInInputs | ISignUpInputs>
  errors: FieldErrors<ISignInInputs | ISignUpInputs>
  name: 'email' | 'password' | 'phone' | 'username'
  type: 'email' | 'password' | 'tel' | 'text'
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
