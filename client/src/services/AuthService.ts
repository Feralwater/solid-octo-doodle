import axios from 'axios';
import { AuthResponse } from 'models/response/AuthResponse';

export const signIn = async (email: string, password: string) => axios
  .post<AuthResponse>('/sign-in', { email, password });

export const signUp = async (email: string, password: string) => axios
  .post<AuthResponse>('/sign-up', { email, password });

export const signOut = async () => axios
  .post<void>('/sign-out');
