import { IUser } from '../database';

export interface ISession {
  accessToken: string;
  user: IUser;
}
