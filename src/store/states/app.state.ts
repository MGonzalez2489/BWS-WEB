import { UiState, AuthState, ProviderState, UserState } from '@store/states';

export interface AppState {
  UI: UiState;
  auth: AuthState;
  provider: ProviderState;
  user: UserState;
}
