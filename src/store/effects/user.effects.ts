import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '@core/services/profile.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IUser, ResultModel } from '@shared/models';
import {
  CreateArtistProfileAction,
  CreateArtistProfileFailAction,
  CreateArtistProfileSuccessAction,
  CreateConsumerProfileAction,
  CreateConsumerProfileFailAction,
  CreateConsumerProfileSuccessAction,
} from '@store/actions';
import { BWSState } from '@store/states';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as UserActions from '@store/actions/user.actions';
import { UserService } from '@core/services';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private userService: UserService,
    private router: Router,
    private store: Store<BWSState>
  ) {}

  postConsumerProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateConsumerProfileAction),
      mergeMap((params) =>
        this.profileService.createConsumerProfile(params.userId).pipe(
          map((response: ResultModel<IUser>) => {
            if (!response.isSuccess) {
              return CreateConsumerProfileFailAction({
                payload: response.message,
              });
            }

            const user = response.model;
            this.store.dispatch(UserActions.GetUserSuccessAction({ user }));

            return CreateConsumerProfileSuccessAction({ user: response.model });
          }),
          catchError((error) =>
            of(CreateConsumerProfileFailAction({ payload: error }))
          )
        )
      )
    )
  );

  postArtistProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateArtistProfileAction),
      mergeMap((params) =>
        this.profileService.createArtistProfile(params.userId).pipe(
          map((response: ResultModel<IUser>) => {
            if (!response.isSuccess) {
              return CreateArtistProfileFailAction({
                payload: response.message,
              });
            }

            const user = response.model;
            this.store.dispatch(UserActions.GetUserSuccessAction({ user }));

            return CreateArtistProfileSuccessAction({ user: response.model });
          }),
          catchError((error) =>
            of(CreateArtistProfileFailAction({ payload: error }))
          )
        )
      )
    )
  );

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
