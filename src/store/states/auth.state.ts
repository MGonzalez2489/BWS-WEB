import { IUser } from '@shared/models';

export interface AuthState {
  user: IUser | null;
  token: string | null;
}
