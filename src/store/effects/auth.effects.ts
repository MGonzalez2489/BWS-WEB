import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, ErrorService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UserTypeEnum } from '@shared/enums';
import { ILogin, ISession, ResultModel } from '@shared/models';
import {
  LoginAction,
  LoginFailedAction,
  LoginSuccessAction,
  SigninAction,
  SigninFailedAction,
  SigninSuccessAction,
} from '@store/actions/auth.actions';
import {
  GetUserSuccessAction,
  UpdateUserTypeAction,
} from '@store/actions/user.actions';
import { AppState } from '@store/states/app.state';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private errorService: ErrorService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginAction),
      mergeMap((data: { params: ILogin }) => {
        this.errorService.cleanError();
        return this.authService.login(data.params).pipe(
          map((response: ResultModel<ISession>) => {
            if (!response.isSuccess) {
              this.errorService.setError(response);
              return LoginFailedAction({
                payload: response.message,
              });
            }
            const { user, token } = response.model;
            this.store.dispatch(GetUserSuccessAction({ user }));
            //onboarding
            if (user.boardingRequired) {
              this.router.navigate(['/onboarding']);
            } else {
              if (user.consumerProfile) {
                this.store.dispatch(
                  UpdateUserTypeAction({ userType: UserTypeEnum.consumer })
                );
                this.router.navigate(['/1']);
              }
              if (user.artistProfile) {
                this.store.dispatch(
                  UpdateUserTypeAction({ userType: UserTypeEnum.artist })
                );
                this.router.navigate(['/2']);
              }
            }

            //verificar navegacioon si requiere ornboarding o no
            return LoginSuccessAction({ token });

            //const user = response.model.user;
            //if (user.boardingRequired) {
            //} else {
            //if (user.consumerProfile) {
            //this.store.dispatch(
            //UserActions.UpdateUserTypeAction({
            //userType: UserTypeEnum.consumer,
            //})
            //);
            //this.router.navigate(['/1']);
            //} else {
            //this.store.dispatch(
            //UserActions.UpdateUserTypeAction({
            //userType: UserTypeEnum.artist,
            //})
            //);

            //this.router.navigate(['/2']);
            //}
            ////navigate to the starting page for each profile
            //}
            //navigate to organization home page for owner
          }),
          catchError((err) => {
            this.errorService.setError(err);
            return of(LoginFailedAction({ payload: err }));
          })
        );
      })
    )
  );

  signin = createEffect(() =>
    this.actions$.pipe(
      ofType(SigninAction),
      mergeMap((data: { params: ILogin }) => {
        this.errorService.cleanError();

        return this.authService.signin(data.params).pipe(
          map((response: ResultModel<ISession>) => {
            if (!response.isSuccess) {
              this.errorService.setError(response);
              return SigninFailedAction({ payload: response });
            }

            const { user, token } = response.model;
            this.store.dispatch(GetUserSuccessAction({ user }));
            this.router.navigate(['/onboarding']);
            return SigninSuccessAction({ token });
          }),
          catchError((err) => {
            this.errorService.setError(err);
            return of(SigninFailedAction({ payload: err }));
          })
        );
      })
    )
  );
}
