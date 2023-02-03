import { on } from '@ngrx/store';
import {
  GetCategoriesAction,
  GetCategoriesFailAction,
  GetCategoriesSuccessAction,
  GetServicesAction,
  GetServicesFailAction,
  GetServicesSuccessAction,
} from '@store/actions/provider.actions';
import { FEATURE_NAME } from '@store/constants';
import { ProviderState } from '@store/states';
import { createRehydrateReducer } from './_rehidrateReducer';

const initialState: ProviderState = {
  categories: [],
  services: [],
};

const _providerReducer = createRehydrateReducer(
  FEATURE_NAME.PROVIDER,
  initialState,
  on(GetServicesAction, (state) => {
    return {
      ...state,
    };
  }),
  on(GetServicesSuccessAction, (state, { services }) => {
    return {
      ...state,
      services,
    };
  }),
  on(GetServicesFailAction, (state) => {
    return {
      ...state,
    };
  }),

  //CATEGORIES
  on(GetCategoriesAction, (state) => {
    return {
      ...state,
    };
  }),
  on(GetCategoriesSuccessAction, (state, { categories }) => {
    return {
      ...state,
      categories,
    };
  }),
  on(GetCategoriesFailAction, (state) => {
    return {
      ...state,
    };
  })
);

export function ProviderReducer(state: any, action: any) {
  return _providerReducer(state, action);
}
