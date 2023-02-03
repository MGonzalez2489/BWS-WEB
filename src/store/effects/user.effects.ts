import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IUser, ResultModel } from '@shared/models';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from '@core/services';
import * as UserActions from '@store/actions/user.actions';
import { AppState } from '@store/states/app.state';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  putUpdateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.UpdateUserAction),
      mergeMap((params) =>
        this.userService.updateGeneral(params.user).pipe(
          map((response: ResultModel<IUser>) => {
            if (!response.isSuccess) {
              return UserActions.UpdateUserFailAction({
                payload: response.message,
              });
            }

            const user = response.model;
            this.store.dispatch(UserActions.GetUserSuccessAction({ user }));

            return UserActions.UpdateUserSuccessAction({
              user: response.model,
            });
          }),
          catchError((error) =>
            of(UserActions.UpdateUserFailAction({ payload: error }))
          )
        )
      )
    )
  );
}
