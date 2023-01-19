import { createAction, props } from '@ngrx/store';
import { ILogin, ISession } from '@shared/models';

export enum AUTH_ACTIONS {
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login Success',
  LOGIN_FAIL = '[AUTH] Login Fail',

  SIGNIN = '[AUTH] Signin',
  SIGNIN_SUCCESS = '[AUTH] Signin SUCCESS',
  SIGNIN_FAIL = '[AUTH] Signin Fail',
}

//Signin
export const SigninAction = createAction(
  AUTH_ACTIONS.SIGNIN,
  props<{ params: ILogin }>()
);

export const SigninSuccessAction = createAction(
  AUTH_ACTIONS.SIGNIN_SUCCESS,
  props<{ session: ISession }>()
);
export const SigninFailedAction = createAction(
  AUTH_ACTIONS.SIGNIN_FAIL,
  props<{ payload: any }>()
);

//Login
export const LoginAction = createAction(
  AUTH_ACTIONS.LOGIN,
  props<{ params: ILogin }>()
);

export const LoginSuccessAction = createAction(
  AUTH_ACTIONS.LOGIN_SUCCESS,
  props<{ session: ISession }>()
);
export const LoginFailedAction = createAction(
  AUTH_ACTIONS.LOGIN_FAIL,
  props<{ payload: any }>()
);
