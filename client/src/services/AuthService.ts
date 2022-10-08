import api from 'http/index';
import { AUTH_API } from 'services/constants';
import { AuthResponse } from 'models/response/AuthResponse';

export const signIn = async (
  email: string | null,
  password: string | null,
  googleToken?: string,
) => api
  .post(AUTH_API.authSignIn(), { email, password, googleToken });

export const signUp = async (
  username: string,
  email: string,
  password: string,
  phone: string,
) => api.post(AUTH_API.authSignUp(), {
  username, email, password, phone,
});

export const googleSignUp = async (googleToken: string) => api
  .post(AUTH_API.authGoogleSignUp(), { googleToken });

export const signOut = async () => api.post(AUTH_API.authSignOut());

export const refresh = async () => api.get<AuthResponse>(AUTH_API.refresh());
