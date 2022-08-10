import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormField } from 'pages/Authentification/components';
import { ForgotLink, Form } from 'pages/Authentification/components/SignInForm/SignInForm.styles';
import { Button, Link } from 'components';
import { InputsProps } from 'pages/Authentification/components/SignInForm/SignInForm.interface';

export const SignInForm = () => {
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
      <div>
        <FormField
          name="password"
          control={control}
          errors={errors}
          id="password"
          label="Password"
          type="password"
        />
        <ForgotLink>
          <Link to="/forgot-password">Forgot password?</Link>
        </ForgotLink>
      </div>
      <Button
        color="primary"
        size="large"
        onClick={handleSubmit(onSubmit)}
        type="submit"
      >
        Sign In
      </Button>
    </Form>
  );
};
