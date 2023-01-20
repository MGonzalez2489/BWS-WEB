import { AuthState } from './auth.state';
import { ErrorState } from './error.state';
import { UserState } from './user.state';

export interface BWSState {
  auth: AuthState;
  user: UserState;
  error: ErrorState;
}
