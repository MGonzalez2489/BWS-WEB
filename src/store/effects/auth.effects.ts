import { Injectable } from '@angular/core';
import { AuthService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as AuthActions from '@store/actions/auth.actions';
import * as UserActions from '@store/actions/user.actions';
import { ILogin, ISession, ResultModel } from '@shared/models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BWSState } from '@store/states';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<BWSState>
  ) {}

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
            const user = response.model.user;
            if (!user.boardingRequired) {
              this.router.navigate(['/onboarding']);
            } else {
              //navigate to the starting page for each profile
            }
            //navigate to organization home page for owner
            this.store.dispatch(UserActions.GetUserSuccessAction({ user }));
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

  signin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.SigninAction),
      mergeMap((data: { params: ILogin }) =>
        this.authService.signin(data.params).pipe(
          map((response: ResultModel<ISession>) => {
            if (!response.isSuccess) {
              alert(response.message);
              return AuthActions.SigninFailedAction({ payload: response });
            }

            const user = response.model.user;
            this.store.dispatch(UserActions.GetUserSuccessAction({ user }));

            this.router.navigate(['/onboarding']);
            return AuthActions.SigninSuccessAction({
              session: response.model,
            });
          }),
          catchError((err) =>
            of(AuthActions.SigninFailedAction({ payload: err }))
          )
        )
      )
    )
  );
}
