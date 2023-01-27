import { createReducer, on } from '@ngrx/store';
import { UiState } from '@store/states';

import * as UI_Actions from '@store/actions/ui.actions';

const initialState: UiState = {
  modal: false,
};

const _uiReducer = createReducer(
  initialState,
  on(UI_Actions.SetOpenedModalAction, (state) => {
    return {
      ...state,
      modal: true,
    };
  }),
  on(UI_Actions.RemoveOpenedModalAction, (state) => {
    return {
      ...state,
      modal: false,
    };
  })
);

export function UiReducer(state: any, action: any) {
  return _uiReducer(state, action);
}
