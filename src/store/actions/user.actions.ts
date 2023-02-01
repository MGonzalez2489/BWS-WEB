import { createAction, props } from '@ngrx/store';
import { IArtistProfile, IUser } from '@shared/models';

export enum USER_ACTIONS {
  GET_USER = '[USER] Get User',
  GET_USER_SUCCESS = '[USER] Get User Success',
  GET_USER_FAIL = '[USER] Get User Fail',

  UPDATE_USER = '[USER] Update User',
  UPDATE_USER_SUCCESS = '[USER] Update User Success',
  UPDATE_USER_FAIL = '[USER] Update User Fail',
  //ARTIST
  CREATE_USER_ARTIST_PROFILE = '[USER] Create User Artist Profile',
  CREATE_USER_ARTIST_PROFILE_SUCCESS = '[USER] Create User Artist Profile Success',
  CREATE_USER_ARTIST_PROFILE_FAIL = '[USER] Create User Artist Profile Fail',

  CREATE_ARTIST_SERVICE = '[USER] Create Artist Service',
  CREATE_ARTIST_SERVICE_SUCCESS = '[USER] Create Artist Service Success',
  CREATE_ARTIST_SERVICE_FAIL = '[USER] Create Artist Service Fail',

  DELETE_ARTIST_SERVICE = '[USER] Delete Artist Service',
  DELETE_ARTIST_SERVICE_SUCCESS = '[USER] Delete Artist Service Success',
  DELETE_ARTIST_SERVICE_FAIL = '[USER] Delete Artist Service Fail',

  //CONSUMER
  CREATE_USER_CONSUMER_PROFILE = '[USER] Create User Consumer Profile',
  CREATE_USER_CONSUMER_PROFILE_SUCCESS = '[USER] Create User Consumer Profile Success',
  CREATE_USER_CONSUMER_PROFILE_FAIL = '[USER] Create User Consumer Profile Fail',
}
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
//Artist Profile
export const CreateArtistProfileAction = createAction(
  USER_ACTIONS.CREATE_USER_ARTIST_PROFILE,
  props<{ userId: string }>()
);
export const CreateArtistProfileSuccessAction = createAction(
  USER_ACTIONS.CREATE_USER_ARTIST_PROFILE_SUCCESS,
  props<{ user: IUser }>()
);
export const CreateArtistProfileFailAction = createAction(
  USER_ACTIONS.CREATE_USER_ARTIST_PROFILE_FAIL,
  props<{ payload: any }>()
);

//Consumer Profile
export const CreateConsumerProfileAction = createAction(
  USER_ACTIONS.CREATE_USER_CONSUMER_PROFILE,
  props<{ userId: string }>()
);
export const CreateConsumerProfileSuccessAction = createAction(
  USER_ACTIONS.CREATE_USER_CONSUMER_PROFILE_SUCCESS,
  props<{ user: IUser }>()
);
export const CreateConsumerProfileFailAction = createAction(
  USER_ACTIONS.CREATE_USER_CONSUMER_PROFILE_FAIL,
  props<{ payload: any }>()
);

//ARTIST Services
export const CreateArtistServiceAction = createAction(
  USER_ACTIONS.CREATE_ARTIST_SERVICE,
  props<{ userId: string; serviceId: string; cost: number }>()
);

export const CreateArtistServiceSuccessAction = createAction(
  USER_ACTIONS.CREATE_ARTIST_SERVICE_SUCCESS,
  props<{ artistProfile: IArtistProfile }>()
);

export const CreateArtistServiceFailAction = createAction(
  USER_ACTIONS.CREATE_ARTIST_SERVICE_FAIL,
  props<{ payload: any }>()
);

export const DeleteArtistServiceAction = createAction(
  USER_ACTIONS.DELETE_ARTIST_SERVICE,
  props<{ serviceId: string }>()
);

export const DeleteArtistServiceSuccessAction = createAction(
  USER_ACTIONS.DELETE_ARTIST_SERVICE_SUCCESS,
  props<{ response: boolean }>()
);

export const DeleteArtistServiceFailAction = createAction(
  USER_ACTIONS.DELETE_ARTIST_SERVICE_FAIL,
  props<{ payload: any }>()
);
