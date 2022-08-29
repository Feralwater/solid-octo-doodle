import { IUser } from 'models/IUser';
import { makeAutoObservable } from 'mobx';
import { signIn, signOut, signUp } from 'services/AuthService';

export default class Store {
  user = { } as IUser;

  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  async signIn(email: string, password: string) {
    try {
      const response = await signIn(email, password);
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
}
