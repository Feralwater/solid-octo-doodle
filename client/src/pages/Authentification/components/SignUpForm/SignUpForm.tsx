import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Checkbox, Input } from 'components';
import { ISignUpInputs } from 'pages/Authentification/components/SignUpForm/SignUpForm.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorBubble, Form, InputContainer } from 'pages/Authentification/components/SignUpForm/SignUpForm.styles';
import store from 'store/store';
import { observer } from 'mobx-react-lite';

const schema = yup.object().shape({
  username: yup.string().min(2).max(30).required('Username is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6).max(15).required(),
  checkbox: yup.boolean().required().oneOf([true], 'You must accept the terms and conditions'),
});

export const SignUpForm = observer(() => {
  const {
    handleSubmit, register, formState: { errors }, getValues,
  } = useForm<ISignUpInputs>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      checkbox: false,
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<ISignUpInputs> = async ({
    username, email, password,
  }) => {
    await store.signUp(username, email, password);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          inputSize="small"
          label="Username"
          id="username"
          type="text"
          {...register('username')}
        />
        <ErrorBubble>{errors.username?.message}</ErrorBubble>
      </InputContainer>
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
      <InputContainer>
        <Checkbox
          label="I accept terms and privacy policy"
          id="agreement"
          {...register('checkbox')}
        />
        <ErrorBubble>{errors.checkbox?.message}</ErrorBubble>
      </InputContainer>
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
});
