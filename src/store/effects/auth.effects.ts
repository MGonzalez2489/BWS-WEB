import { Injectable } from '@angular/core';
import { AuthService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as AuthActions from '@store/actions';
import { ILogin, ISession, ResultModel } from '@shared/models';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LoginAction),
      mergeMap((data: { params: ILogin }) =>
        this.authService.login(data.params).pipe(
          map((response: ResultModel<ISession>) => {
            if (!response.isSuccess) {
              return AuthActions.LoginFailedAction({
                payload: response.message,
              });
            }
            //navigate to organization home page for owner
            else
              return AuthActions.LoginSuccessAction({
                session: response.model,
              });
          }),
          catchError((err) =>
            of(AuthActions.LoginFailedAction({ payload: err }))
          )
        )
      )
    )
  );
}
