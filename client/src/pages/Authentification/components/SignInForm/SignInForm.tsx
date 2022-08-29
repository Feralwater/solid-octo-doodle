import React, { useContext } from 'react';
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
import { Context } from 'index';
import { observer } from 'mobx-react-lite';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(15).required(),
});

const SignInForm = () => {
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

  const { store } = useContext(Context);

  const onSubmit: SubmitHandler<ISignInInputs> = async ({ email, password }) => {
    await store.signIn(email, password);
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

export default observer(SignInForm);
