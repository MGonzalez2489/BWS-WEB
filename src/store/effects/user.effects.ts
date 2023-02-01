import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '@core/services/profile.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IArtistProfile, IUser, ResultModel } from '@shared/models';
import {
  CreateArtistProfileAction,
  CreateArtistProfileFailAction,
  CreateArtistProfileSuccessAction,
  CreateConsumerProfileAction,
  CreateConsumerProfileFailAction,
  CreateConsumerProfileSuccessAction,
  RemoveOpenedModalAction,
} from '@store/actions';
import { BWSState } from '@store/states';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as UserActions from '@store/actions/user.actions';
import { ArtistServicesService, UserService } from '@core/services';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private userService: UserService,
    private artistServicesService: ArtistServicesService,
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

  createArtistService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.CreateArtistServiceAction),
      mergeMap((params) =>
        this.artistServicesService
          .createArtistService(params.userId, params.serviceId, params.cost)
          .pipe(
            map((response: ResultModel<IArtistProfile>) => {
              if (!response.isSuccess) {
                return UserActions.CreateArtistServiceFailAction({
                  payload: response.message,
                });
              }
              this.store.dispatch(RemoveOpenedModalAction());
              return UserActions.CreateArtistServiceSuccessAction({
                artistProfile: response.model,
              });
            }),
            catchError((error) =>
              of(UserActions.CreateArtistServiceFailAction({ payload: error }))
            )
          )
      )
    )
  );

  deleteArtistService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.DeleteArtistServiceAction),
      mergeMap((params) =>
        this.artistServicesService.deleteArtistService(params.serviceId).pipe(
          map((response: ResultModel<boolean>) => {
            if (!response.isSuccess) {
              return UserActions.DeleteArtistServiceFailAction({
                payload: response.message,
              });
            }
            //this.store.dispatch(RemoveOpenedModalAction());
            return UserActions.DeleteArtistServiceSuccessAction({
              response: response.model,
            });
          }),
          catchError((error) =>
            of(UserActions.DeleteArtistServiceFailAction({ payload: error }))
          )
        )
      )
    )
  );
}
