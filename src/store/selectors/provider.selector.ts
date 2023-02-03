import { createSelector } from '@ngrx/store';
import { ProviderState } from '@store/states';
import { AppState } from '@store/states/app.state';

const providerState = (state: AppState) => state.provider;

export const selectCategories = createSelector(
  providerState,
  (state: ProviderState) => state?.categories
);

export const selectServices = createSelector(
  providerState,
  (state: ProviderState) => state?.services
);
