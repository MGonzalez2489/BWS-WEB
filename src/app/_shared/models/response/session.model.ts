import { IUser } from '../database';

export interface ISession {
  token: string;
  user: IUser;
}
