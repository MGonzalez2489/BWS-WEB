import { createSelector } from '@ngrx/store';
import { UiState } from '@store/states';
import { AppState } from '@store/states/app.state';

const uiState = (state: AppState) => state.UI;

export const selectError = createSelector(
  uiState,
  (state: UiState) => state?.error
);
