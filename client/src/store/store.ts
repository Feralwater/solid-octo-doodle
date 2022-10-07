import { IUser } from 'models/IUser';
import { makeAutoObservable } from 'mobx';
import {
  refresh, signIn, signOut, signUp,
} from 'services/AuthService';
import axios from 'axios';

export default class Store {
  user = { } as IUser;

  isAuth: boolean = false;

  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  async signIn(email: string | null, password: string | null, googleToken?: string) {
    try {
      const response = await signIn(email, password, googleToken);
      localStorage.setItem('token', response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  async signUp(username: string, email: string, password: string, phone: string) {
    try {
      const response = await signUp(username, email, password, phone);
      localStorage.setItem('token', response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }

  async signOut() {
    try {
      await signOut();
      localStorage.removeItem('token');
      this.setIsAuth(false);
      this.setUser({} as IUser);
    } catch (error) {
      console.log(error);
    }
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  async checkIsAuth() {
    this.setIsLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/refresh-token`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  }
}
