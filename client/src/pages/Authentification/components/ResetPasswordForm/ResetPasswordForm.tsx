import React from 'react';
import { Button, Input } from 'components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { PATH } from 'routes/constants';
import { IResetPasswordForm } from 'pages/Authentification/components/ResetPasswordForm/ResetPasswordForm.interface';
import { ErrorBubble, Form, InputContainer } from 'pages/Authentification/components/ResetPasswordForm/ResetPasswordForm.styles';

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export const ResetPasswordForm = () => {
  const {
    handleSubmit, register, formState: { errors },
  } = useForm<IResetPasswordForm>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IResetPasswordForm> = () => {
    navigate(PATH.RESTORE_LINK_SENT);
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
      <Button
        color="primary"
        size="large"
        onClick={handleSubmit(onSubmit)}
        type="submit"
      >
        Send
      </Button>
    </Form>
  );
};
