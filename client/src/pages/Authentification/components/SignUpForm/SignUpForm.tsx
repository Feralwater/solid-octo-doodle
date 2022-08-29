import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input } from 'components';
import { ISignUpInputs } from 'pages/Authentification/components/SignUpForm/SignUpForm.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorBubble, Form, InputContainer } from 'pages/Authentification/components/SignUpForm/SignUpForm.styles';
import { Context } from 'index';

const schema = yup.object().shape({
  username: yup.string().min(2).max(15).required('Username is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(4).max(15).required(),
  phone: yup.number().required('Phone should be a number').nullable(),
});

export const SignUpForm = () => {
  const {
    handleSubmit, register, formState: { errors },
  } = useForm<ISignUpInputs>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      phone: null,
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const { store } = useContext(Context);

  const onSubmit: SubmitHandler<ISignUpInputs> = async ({
    username, email, password, phone,
  }) => {
    await store.signUp(username, email, password, phone);
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
        <Input
          inputSize="small"
          label="Phone"
          id="phone"
          type="tel"
          {...register('phone')}
        />
        <ErrorBubble>{errors.phone?.message}</ErrorBubble>
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
};
