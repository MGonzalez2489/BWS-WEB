import { createSelector } from '@ngrx/store';
import { BWSState, ErrorState } from '@store/states';

export const errorState = (state: BWSState) => state.error;

export const getLastError = createSelector(
  errorState,
  (state: ErrorState) => state.lastError
);
