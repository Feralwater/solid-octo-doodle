import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormField } from 'pages/Login/components/FormField/FormField';
import { Form } from 'pages/Login/components/LoginForm/LoginForm.styles';
import { Button } from 'components';
import { InputsProps } from 'pages/Login/components/LoginForm/LoginForm.interface';

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
