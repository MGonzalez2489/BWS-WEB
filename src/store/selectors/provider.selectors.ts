import { createSelector } from '@ngrx/store';
import { BWSState, ProviderState } from '@store/states';

export const providerState = (state: BWSState) => state.provider;

export const getCategories = createSelector(
  providerState,
  (state: ProviderState) => state.categories
);

export const getServices = createSelector(
  providerState,
  (state: ProviderState) => state.services
);
