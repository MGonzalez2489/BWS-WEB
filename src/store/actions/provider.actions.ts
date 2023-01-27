import { createAction, props } from '@ngrx/store';
import { ICategory, IService } from '@shared/models';

export enum PROVIDER_ACTIONS {
  GET_CATEGORIES = '[PROVIDER] Get Categories',
  GET_CATEGORIES_SUCCESS = '[PROVIDER] Get Categories Success',
  GET_CATEGORIES_FAIL = '[PROVIDER] Get Categories Fail',

  GET_SERVICES = '[PROVIDER] Get Services',
  GET_SERVICES_SUCCESS = '[PROVIDER] Get Services Success',
  GET_SERVICES_FAIL = '[PROVIDER] Get Services Fail',
}

//Services
export const GetServicesAction = createAction(
  PROVIDER_ACTIONS.GET_SERVICES,
  props<{ category: string }>()
);

export const GetServicesSuccessAction = createAction(
  PROVIDER_ACTIONS.GET_SERVICES_SUCCESS,
  props<{ services: Array<IService> }>()
);

export const GetServicesFailAction = createAction(
  PROVIDER_ACTIONS.GET_SERVICES_FAIL,
  props<{ payload: any }>()
);

//Categories

export const GetCategoriesAction = createAction(
  PROVIDER_ACTIONS.GET_CATEGORIES
);

export const GetCategoriesSuccessAction = createAction(
  PROVIDER_ACTIONS.GET_CATEGORIES_SUCCESS,
  props<{ categories: Array<ICategory> }>()
);

export const GetCategoriesFailAction = createAction(
  PROVIDER_ACTIONS.GET_CATEGORIES_FAIL,
  props<{ payload: any }>()
);
