import { createAction, props } from '@ngrx/store';
import { ILogin, ISession } from '@shared/models';

export enum USER_ACTIONS {
  LOGIN = '[AUTH] Login',
  LOGIN_SUCCESS = '[AUTH] Login Success',
  LOGIN_FAIL = '[AUTH] Login Fail',
}

export const LoginAction = createAction(
  USER_ACTIONS.LOGIN,
  props<{ params: ILogin }>()
);

export const LoginSuccessAction = createAction(
  USER_ACTIONS.LOGIN_SUCCESS,
  props<{ session: ISession }>()
);
export const LoginFailedAction = createAction(
  '[AUTH] Login Failed',
  props<{ payload: any }>()
);
