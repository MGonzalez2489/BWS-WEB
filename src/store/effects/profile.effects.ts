import { Injectable } from '@angular/core';
import { ProfileService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UserTypeEnum } from '@shared/enums';
import { IArtistProfile, IConsumerProfile, ResultModel } from '@shared/models';
import {
  CreateArtistProfileAction,
  CreateArtistProfileFailAction,
  CreateArtistProfileSuccessAction,
  CreateConsumerProfileAction,
  CreateConsumerProfileFailAction,
  CreateConsumerProfileSuccessAction,
} from '@store/actions/profile.actions';
import { UpdateUserTypeAction } from '@store/actions/user.actions';
import { AppState } from '@store/states/app.state';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private store: Store<AppState>
  ) {}

  postConsumerProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateConsumerProfileAction),
      mergeMap((params) =>
        this.profileService.createConsumerProfile(params.userId).pipe(
          map((response: ResultModel<IConsumerProfile>) => {
            if (!response.isSuccess) {
              return CreateConsumerProfileFailAction({
                payload: response.message,
              });
            }

            this.store.dispatch(
              UpdateUserTypeAction({ userType: UserTypeEnum.consumer })
            );

            return CreateConsumerProfileSuccessAction({
              profile: response.model,
            });
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
          map((response: ResultModel<IArtistProfile>) => {
            if (!response.isSuccess) {
              return CreateArtistProfileFailAction({
                payload: response.message,
              });
            }

            this.store.dispatch(
              UpdateUserTypeAction({ userType: UserTypeEnum.artist })
            );
            return CreateArtistProfileSuccessAction({
              profile: response.model,
            });
          }),
          catchError((error) =>
            of(CreateArtistProfileFailAction({ payload: error }))
          )
        )
      )
    )
  );
}
