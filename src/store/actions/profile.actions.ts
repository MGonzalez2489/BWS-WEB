import { createAction, props } from '@ngrx/store';
import { IArtistProfile, IConsumerProfile } from '@shared/models';

enum PROFILE_ACTIONS {
  CREATE_USER_ARTIST_PROFILE = '[USER] Create User Artist Profile',
  CREATE_USER_ARTIST_PROFILE_SUCCESS = '[USER] Create User Artist Profile Success',
  CREATE_USER_ARTIST_PROFILE_FAIL = '[USER] Create User Artist Profile Fail',

  CREATE_USER_CONSUMER_PROFILE = '[USER] Create User Consumer Profile',
  CREATE_USER_CONSUMER_PROFILE_SUCCESS = '[USER] Create User Consumer Profile Success',
  CREATE_USER_CONSUMER_PROFILE_FAIL = '[USER] Create User Consumer Profile Fail',
}

//Artist Profile
export const CreateArtistProfileAction = createAction(
  PROFILE_ACTIONS.CREATE_USER_ARTIST_PROFILE,
  props<{ userId: string }>()
);
export const CreateArtistProfileSuccessAction = createAction(
  PROFILE_ACTIONS.CREATE_USER_ARTIST_PROFILE_SUCCESS,
  props<{ profile: IArtistProfile }>()
);
export const CreateArtistProfileFailAction = createAction(
  PROFILE_ACTIONS.CREATE_USER_ARTIST_PROFILE_FAIL,
  props<{ payload: any }>()
);

//Consumer Profile
export const CreateConsumerProfileAction = createAction(
  PROFILE_ACTIONS.CREATE_USER_CONSUMER_PROFILE,
  props<{ userId: string }>()
);
export const CreateConsumerProfileSuccessAction = createAction(
  PROFILE_ACTIONS.CREATE_USER_CONSUMER_PROFILE_SUCCESS,
  props<{ profile: IConsumerProfile }>()
);
export const CreateConsumerProfileFailAction = createAction(
  PROFILE_ACTIONS.CREATE_USER_CONSUMER_PROFILE_FAIL,
  props<{ payload: any }>()
);
