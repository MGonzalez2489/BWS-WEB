import { createAction, props } from '@ngrx/store';
import { ILogin, ISession } from '@shared/models';

export enum USER_ACTIONS {
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login Success',
  LOGIN_FAIL = '[AUTH] Login Fail',

  SIGNIN = '[AUTH] Signin',
  SIGNIN_SUCCESS = '[AUTH] Signin SUCCESS',
  SIGNIN_FAIL = '[AUTH] Signin Fail',
}

//Signin
export const SigninAction = createAction(
  USER_ACTIONS.SIGNIN,
  props<{ params: ILogin }>()
);

export const SigninSuccessAction = createAction(
  USER_ACTIONS.SIGNIN_SUCCESS,
  props<{ session: ISession }>()
);
export const SigninFailedAction = createAction(
  USER_ACTIONS.SIGNIN_FAIL,
  props<{ payload: any }>()
);

//Login
export const LoginAction = createAction(
  USER_ACTIONS.LOGIN,
  props<{ params: ILogin }>()
);

export const LoginSuccessAction = createAction(
  USER_ACTIONS.LOGIN_SUCCESS,
  props<{ session: ISession }>()
);
export const LoginFailedAction = createAction(
  USER_ACTIONS.LOGIN_FAIL,
  props<{ payload: any }>()
);
