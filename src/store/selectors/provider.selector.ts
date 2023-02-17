import { createSelector } from '@ngrx/store';
import { ProviderState } from '@store/states';
import { AppState } from '@store/states/app.state';

const providerState = (state: AppState) => state.provider;

export const selectCategories = createSelector(
  providerState,
  (state: ProviderState) => state?.categories
);

export const selectServices = (categoryId: string) =>
  createSelector(providerState, (state: ProviderState) => {
    console.log('services', state?.services);
    return state?.services;
  });
