import { createAction, props } from '@ngrx/store';

export enum ERROR_ACTIONS {
  SET_ERROR = '[ERROR] Set Error',
  CLEAN_ERROR = '[ERROR] Clean Error',
}

export const SetErrorAction = createAction(
  ERROR_ACTIONS.SET_ERROR,
  props<{ error: string }>()
);

export const CleanErrorAction = createAction(ERROR_ACTIONS.CLEAN_ERROR);
