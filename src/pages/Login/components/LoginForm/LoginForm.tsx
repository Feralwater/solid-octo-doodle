import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormField } from 'pages/Login/components/FormField/FormField';
import { Form } from 'pages/Login/components/LoginForm/LoginForm.styles';
import { Button } from 'components';

export interface InputsProps {
  email: string
  password: string
}

export const LoginForm = () => {
  const {
    handleSubmit, control, formState: { errors },
  } = useForm<InputsProps>();

  const onSubmit: SubmitHandler<InputsProps> = ({ email, password }) => {
    alert(`${email}, ${password}}`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="email"
        control={control}
        errors={errors}
        id="email"
        placeholder="Email"
        label="Email"
        type="email"
      />
      <FormField
        name="password"
        control={control}
        errors={errors}
        id="password"
        placeholder="Password"
        label="Password"
        type="password"
      />
      <Button
        color="primary"
        size="large"
        onClick={handleSubmit(onSubmit)}
        type="submit"
      >
        Login
      </Button>
    </Form>
  );
};
