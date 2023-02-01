import { AuthState } from './auth.state';
import { ErrorState } from './error.state';
import { ProviderState } from './provider.state';
import { UiState } from './ui.state';
import { UserState } from './user.state';

export interface BWSState {
  UI: UiState;
  auth: AuthState;
  user: UserState;
  error: ErrorState;
  provider: ProviderState;
}
