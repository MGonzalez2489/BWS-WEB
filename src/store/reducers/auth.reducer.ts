import { createReducer, on } from '@ngrx/store';
import { AuthState } from '@store/states';
import * as AuthActions from '@store/actions';

export const initialState: AuthState = {
  user: null,
  token: null,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.LoginAction, (state) => {
    return state;
  }),
  on(AuthActions.LoginSuccessAction, (state, { session }) => {
    return {
      ...state,
      user: session.user,
      token: session.token,
    };
  })
);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}
