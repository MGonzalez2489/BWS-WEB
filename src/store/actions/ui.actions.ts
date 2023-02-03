import { createAction, props } from '@ngrx/store';

export enum UI_ACTIONS {
  SET_OPENED_MODAL = '[UI] Set Opened Modal',
  REMOVE_OPENED_MODAL = '[UI] Remove Opened Modal',

  SET_ERROR = '[ERROR] Set Error',
  CLEAN_ERROR = '[ERROR] Clean Error',
}

export const SetOpenedModalAction = createAction(UI_ACTIONS.SET_OPENED_MODAL);
export const SetErrorAction = createAction(
  UI_ACTIONS.SET_ERROR,
  props<{ error: string }>()
);
export const CleanErrorAction = createAction(UI_ACTIONS.CLEAN_ERROR);

export const RemoveOpenedModalAction = createAction(
  UI_ACTIONS.REMOVE_OPENED_MODAL
);
