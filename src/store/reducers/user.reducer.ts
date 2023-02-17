import { on } from '@ngrx/store';
import { FEATURE_NAME } from '@store/constants';
import { UserState } from '@store/states';
import { createRehydrateReducer } from './_rehidrateReducer';
import * as UserActions from '@store/actions/user.actions';
import * as ProfileActions from '@store/actions/profile.actions';
import * as ArtistServiceActions from '@store/actions/artist-services.actions';

const initialState: UserState = {
  user: null,
  userType: null,
};

const _userReducer = createRehydrateReducer(
  FEATURE_NAME.USER,
  initialState,
  //Artist Profile Actions
  on(ProfileActions.CreateArtistProfileAction, (state) => {
    return state;
  }),
  on(ProfileActions.CreateArtistProfileSuccessAction, (state, { profile }) => {
    return {
      ...state,
      user: {
        ...state.user,
        artistProfile: profile,
      },
    };
  }),
  on(ProfileActions.CreateArtistProfileFailAction, (state) => {
    return state;
  }),
  //Consumer Profile Actions
  on(ProfileActions.CreateConsumerProfileAction, (state) => {
    return state;
  }),
  on(
    ProfileActions.CreateConsumerProfileSuccessAction,
    (state, { profile }) => {
      return {
        ...state,
        user: {
          ...state.user,
          consumerProfile: profile,
        },
      };
    }
  ),
  on(ProfileActions.CreateConsumerProfileFailAction, (state) => {
    return state;
  }),

  //User Actions
  on(UserActions.UpdateUserAction, (state, { user }) => {
    return {
      ...state,
      user,
    };
  }),
  on(UserActions.UpdateUserSuccessAction, (state, { user }) => {
    return {
      ...state,
      user,
    };
  }),
  on(UserActions.UpdateUserFailAction, (state) => {
    return {
      ...state,
    };
  }),
  on(UserActions.GetUserSuccessAction, (state, { user }) => {
    return {
      ...state,
      user,
    };
  }),
  on(UserActions.GetUserFailAction, (state, { payload }) => {
    return {
      ...state,
    };
  }),
  on(UserActions.UpdateUserTypeAction, (state, { userType }) => {
    return {
      ...state,
      userType: userType,
    };
  }),
  on(
    ArtistServiceActions.CreateArtistServiceSuccessAction,
    (state, { service }) => {
      return {
        ...state,
        user: {
          ...state.user,
          artistProfile: {
            ...state.user.artistProfile,
            services: [...state.user.artistProfile.services, service],
          },
        },
      };
    }
  )
);
export function UserReducer(state: any, action: any) {
  return _userReducer(state, action);
}
