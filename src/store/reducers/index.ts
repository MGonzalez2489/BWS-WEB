import {
  Action,
  ActionCreator,
  ActionReducer,
  ActionReducerMap,
  ActionType,
  createReducer,
  ReducerTypes,
} from '@ngrx/store';
import { BWSState } from '../states';
import { AuthReducer } from './auth.reducer';
import { ErrorReducer } from './error.reducer';
import { UserReducer } from './user.reducer';

export function createRehydrateReducer<S, A extends Action = Action>(
  key: string,
  initialState: S,
  ...ons: ReducerTypes<S, ActionCreator[]>[]
): ActionReducer<S, A> {
  const item = localStorage.getItem(key);
  const newInitialState = (item && JSON.parse(item)) ?? initialState;

  const newOns: ReducerTypes<S, ActionCreator[]>[] = [];
  ons.forEach((oldOn: ReducerTypes<S, ActionCreator[]>) => {
    const newReducer: ActionReducer<S, A> = (
      state: S | undefined,
      action: ActionType<ActionCreator[][number]>
    ) => {
      const newState = oldOn.reducer(state, action);
      localStorage.setItem(key, JSON.stringify(newState));
      return newState;
    };
    newOns.push({ ...oldOn, reducer: newReducer });
  });
  return createReducer(newInitialState, ...newOns);
}

export const reducers: ActionReducerMap<BWSState> = {
  auth: AuthReducer,
  user: UserReducer,
  error: ErrorReducer,
};
