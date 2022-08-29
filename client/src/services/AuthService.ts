import api from 'http';
import { AUTH_API } from 'services/constants';

export const signIn = async (email: string, password: string) => api
  .post(AUTH_API.authSignIn(), { email, password });

export const signUp = async (email: string, password: string) => api
  .post(AUTH_API.authSignUp(), { email, password });

export const signOut = async () => api.post(AUTH_API.authSignOut());
