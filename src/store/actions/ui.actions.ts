import { createAction, props } from '@ngrx/store';

export enum UI_ACTIONS {
  SET_OPENED_MODAL = '[UI] Set Opened Modal',
  REMOVE_OPENED_MODAL = '[UI] Remove Opened Modal',
}

export const SetOpenedModalAction = createAction(UI_ACTIONS.SET_OPENED_MODAL);

export const RemoveOpenedModalAction = createAction(
  UI_ACTIONS.REMOVE_OPENED_MODAL
);
