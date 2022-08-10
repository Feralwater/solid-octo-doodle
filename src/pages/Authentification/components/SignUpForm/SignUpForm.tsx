import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormField } from 'pages/Authentification/components';
import { Button } from 'components';
import { ISignUpInputs } from 'pages/Authentification/components/SignUpForm/SignUpForm.interface';
import { Form } from './SignUpForm.styles';

export const SignUpForm = () => {
  const {
    handleSubmit, control, formState: { errors },
  } = useForm<ISignUpInputs>();

  const onSubmit: SubmitHandler<ISignUpInputs> = ({ email, password }) => {
    alert(`${email}, ${password}}`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="username"
        control={control}
        errors={errors}
        id="username"
        label="Username"
        type="text"
      />
      <FormField
        name="email"
        control={control}
        errors={errors}
        id="email"
        label="Email"
        type="email"
      />
      <FormField
        name="password"
        control={control}
        errors={errors}
        id="password"
        label="Password"
        type="password"
      />
      <FormField
        name="phone"
        control={control}
        errors={errors}
        id="phone"
        label="Phone number"
        type="tel"
      />
      <Button
        color="primary"
        size="large"
        onClick={handleSubmit(onSubmit)}
        type="submit"
      >
        Sign Up
      </Button>
    </Form>
  );
};
