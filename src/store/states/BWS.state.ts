import { AuthState } from './auth.state';
import { UserState } from './user.state';

export interface BWSState {
  auth: AuthState;
  user: UserState;
}
