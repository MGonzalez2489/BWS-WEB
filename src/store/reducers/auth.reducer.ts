import { on } from '@ngrx/store';
import { FEATURE_NAME } from '@store/constants';
import { AuthState } from '@store/states';
import { createRehydrateReducer } from './_rehidrateReducer';
import * as AuthActions from '@store/actions/auth.actions';

const initialState: AuthState = {
  token: null,
};

const _authReducer = createRehydrateReducer(
  FEATURE_NAME.AUTH,
  initialState,
  on(AuthActions.LoginAction, (state) => {
    return state;
  }),
  on(AuthActions.LoginSuccessAction, (state, { token }) => {
    return {
      ...state,
      token,
    };
  }),
  on(AuthActions.LoginFailedAction, (state, { payload }) => {
    return state;
  }),
  on(AuthActions.SigninAction, (state) => {
    return state;
  }),
  on(AuthActions.SigninSuccessAction, (state, { token }) => {
    return {
      ...state,
      token,
    };
  }),
  on(AuthActions.SigninFailedAction, (state, { payload }) => {
    return state;
  })
);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}
