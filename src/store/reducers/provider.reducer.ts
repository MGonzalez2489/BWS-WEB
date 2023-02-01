import { on } from '@ngrx/store';
import { FEATURE_NAME } from '@store/constants';
import { ProviderState } from '@store/states';
import { createRehydrateReducer } from '.';
import * as ProviderActions from '@store/actions/provider.actions';

export const initialState: ProviderState = {
  categories: [],
  services: [],
};

const _providerReducer = createRehydrateReducer(
  FEATURE_NAME.PROVIDER,
  initialState,
  on(ProviderActions.GetServicesAction, (state, { category }) => {
    return {
      ...state,
    };
  }),
  on(ProviderActions.GetServicesSuccessAction, (state, { services }) => {
    return {
      ...state,
      services,
    };
  }),

  on(ProviderActions.GetServicesFailAction, (state, { payload }) => {
    return {
      ...state,
    };
  }),

  //CATEGORIES
  on(ProviderActions.GetCategoriesAction, (state) => {
    return {
      ...state,
    };
  }),
  on(ProviderActions.GetCategoriesSuccessAction, (state, { categories }) => {
    return {
      ...state,
      categories,
    };
  }),
  on(ProviderActions.GetCategoriesFailAction, (state, { payload }) => {
    return {
      ...state,
    };
  })
);

export function ProviderReducer(state: any, action: any) {
  return _providerReducer(state, action);
}
