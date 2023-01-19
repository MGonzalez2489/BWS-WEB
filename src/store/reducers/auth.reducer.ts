import { on } from '@ngrx/store';
import { AuthState } from '@store/states';
import * as AuthActions from '@store/actions';
import { createRehydrateReducer } from '.';
import { FEATURE_NAME } from '@store/constants';

export const initialState: AuthState = {
  token: null,
};

const _authReducer = createRehydrateReducer(
  FEATURE_NAME.AUTH,
  initialState,
  on(AuthActions.LoginAction, (state) => {
    return state;
  }),
  on(AuthActions.LoginSuccessAction, (state, { session }) => {
    return {
      ...state,
      token: session.token,
    };
  }),
  on(AuthActions.SigninAction, (state) => {
    return state;
  }),

  on(AuthActions.SigninSuccessAction, (state, { session }) => {
    return {
      ...state,
      token: session.token,
    };
  })
);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}
