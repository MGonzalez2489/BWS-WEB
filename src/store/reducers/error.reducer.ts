import { on } from '@ngrx/store';
import { FEATURE_NAME } from '@store/constants';
import { ErrorState } from '@store/states';
import { createRehydrateReducer } from '.';
import * as ErrorActions from '@store/actions/error.actions';

export const initialState: ErrorState = {
  lastError: null,
};

const _errorReducer = createRehydrateReducer(
  FEATURE_NAME.ERROR,
  initialState,
  on(ErrorActions.SetErrorAction, (state, { error }) => {
    return {
      ...state,
      lastError: error,
    };
  }),
  on(ErrorActions.CleanErrorAction, (state) => {
    return {
      ...state,
      lastError: null,
    };
  })
);

export function ErrorReducer(state: any, action: any) {
  return _errorReducer(state, action);
}
