import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  ErrorBubble,
  ForgotLink,
  Form,
  InputContainer,
} from 'pages/Authentification/components/SignInForm/SignInForm.styles';
import { Button, Input, Link } from 'components';
import { ISignInInputs } from 'pages/Authentification/components/SignInForm/SignInForm.interface';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PATH } from 'routes/constants';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});

export const SignInForm = () => {
  const {
    handleSubmit, register, formState: { errors },
  } = useForm<ISignInInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<ISignInInputs> = ({ email, password }) => {
    alert(`${email}, ${password}}`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          inputSize="small"
          label="Email"
          id="email"
          type="email"
          {...register('email')}
        />
        <ErrorBubble>{errors.email?.message}</ErrorBubble>
      </InputContainer>
      <div>
        <InputContainer>
          <Input
            inputSize="small"
            label="Password"
            id="password"
            type="password"
            {...register('password')}
          />
          <ErrorBubble>{errors.password?.message}</ErrorBubble>
        </InputContainer>
        <ForgotLink>
          <Link to={PATH.RESTORE_PASSWORD}>Forgot password?</Link>
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
