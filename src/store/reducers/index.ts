import { ActionReducerMap } from '@ngrx/store';
import { BWSState } from '../states';
import { AuthReducer } from './auth.reducer';

export const reducers: ActionReducerMap<BWSState> = {
  auth: AuthReducer,
};
