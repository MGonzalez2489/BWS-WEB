import { createAction, props } from '@ngrx/store';
import { UserTypeEnum } from '@shared/enums';
import { IUser } from '@shared/models';

export enum USER_ACTIONS {
  GET_USER = '[USER] Get User',
  GET_USER_SUCCESS = '[USER] Get User Success',
  GET_USER_FAIL = '[USER] Get User Fail',

  UPDATE_USER = '[USER] Update User',
  UPDATE_USER_SUCCESS = '[USER] Update User Success',
  UPDATE_USER_FAIL = '[USER] Update User Fail',

  UPDATE_USER_TYPE = '[USER] Update user Type',
}

export const UpdateUserTypeAction = createAction(
  USER_ACTIONS.UPDATE_USER_TYPE,
  props<{ userType: UserTypeEnum }>()
);

//Update user
export const UpdateUserAction = createAction(
  USER_ACTIONS.UPDATE_USER,
  props<{ user: IUser }>()
);

export const UpdateUserSuccessAction = createAction(
  USER_ACTIONS.UPDATE_USER_SUCCESS,
  props<{ user: IUser }>()
);

export const UpdateUserFailAction = createAction(
  USER_ACTIONS.UPDATE_USER_FAIL,
  props<{ payload: any }>()
);
//GET USER
export const GetUserSuccessAction = createAction(
  USER_ACTIONS.GET_USER_SUCCESS,
  props<{ user: IUser }>()
);
export const GetUserFailAction = createAction(
  USER_ACTIONS.GET_USER_FAIL,
  props<{ payload: any }>()
);
