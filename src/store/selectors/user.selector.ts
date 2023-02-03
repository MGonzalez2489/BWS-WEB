import { createSelector } from '@ngrx/store';
import { UserState } from '@store/states';
import { AppState } from '@store/states/app.state';

const userState = (state: AppState) => state.user;

export const selectUser = createSelector(
  userState,
  (state: UserState) => state.user
);

export const selectUserType = createSelector(
  userState,
  (state: UserState) => state.userType
);
