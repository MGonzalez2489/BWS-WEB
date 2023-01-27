import { on } from '@ngrx/store';
import { UserState } from '@store/states';
import * as UserActions from '@store/actions/user.actions';
import { createRehydrateReducer } from '.';
import { FEATURE_NAME } from '@store/constants';

export const initialState: UserState = {
  user: null,
};

const _userReducer = createRehydrateReducer(
  FEATURE_NAME.USER,
  initialState,
  on(UserActions.CreateArtistServiceAction, (state) => {
    return {
      ...state,
    };
  }),
  on(
    UserActions.CreateArtistServiceSuccessAction,
    (state, { artistProfile }) => {
      return {
        ...state,
        user: {
          ...state.user,
          artistProfile,
        },
      };
    }
  ),
  on(UserActions.CreateArtistServiceFailAction, (state, payload) => {
    return {
      ...state,
    };
  }),

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
  on(UserActions.UpdateUserFailAction, (state, { payload }) => {
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
  on(UserActions.CreateConsumerProfileAction, (state, { userId: string }) => {
    return {
      ...state,
    };
  }),
  on(UserActions.CreateConsumerProfileSuccessAction, (state, { user }) => {
    return {
      ...state,
      user,
    };
  }),

  on(UserActions.CreateArtistProfileAction, (state, { userId: string }) => {
    return {
      ...state,
    };
  }),
  on(UserActions.CreateArtistProfileSuccessAction, (state, { user }) => {
    return {
      ...state,
      user,
    };
  })
);

export function UserReducer(state: any, action: any) {
  return _userReducer(state, action);
}
