import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '@store/states/app.state';
import { AuthReducer } from './auth.reducer';
import { ProviderReducer } from './provider.reducer';
import { UiReducer } from './ui.reducer';
import { UserReducer } from './user.reducer';

export const AppReducers: ActionReducerMap<AppState> = {
  auth: AuthReducer,
  user: UserReducer,
  UI: UiReducer,
  provider: ProviderReducer,
};
