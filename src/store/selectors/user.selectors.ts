import { createSelector } from '@ngrx/store';
import { BWSState, UserState } from '@store/states';

export const userState = (state: BWSState) => state.user;

export const getUser = createSelector(
  userState,
  (state: UserState) => state.user
);
