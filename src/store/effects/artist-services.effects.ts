import { Injectable } from '@angular/core';
import { ArtistServicesService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IArtistProfile, IArtistService, ResultModel } from '@shared/models';
import {
  CreateArtistServiceAction,
  CreateArtistServiceFailAction,
  CreateArtistServiceSuccessAction,
  DeleteArtistServiceAction,
  DeleteArtistServiceFailAction,
  DeleteArtistServiceSuccessAction,
} from '@store/actions/artist-services.actions';
import { RemoveOpenedModalAction } from '@store/actions/ui.actions';
import { AppState } from '@store/states/app.state';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ArtistServicesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private artistServicesService: ArtistServicesService
  ) {}

  createArtistService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateArtistServiceAction),
      mergeMap((params) =>
        this.artistServicesService
          .createArtistService(params.userId, params.serviceId, params.cost)
          .pipe(
            map((response: ResultModel<IArtistService>) => {
              if (!response.isSuccess) {
                return CreateArtistServiceFailAction({
                  payload: response.message,
                });
              }
              console.log('model', response.model);
              this.store.dispatch(RemoveOpenedModalAction());
              return CreateArtistServiceSuccessAction({
                service: response.model,
              });
            }),
            catchError((error) =>
              of(CreateArtistServiceFailAction({ payload: error }))
            )
          )
      )
    )
  );

  deleteArtistService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteArtistServiceAction),
      mergeMap((params) =>
        this.artistServicesService.deleteArtistService(params.serviceId).pipe(
          map((response: ResultModel<boolean>) => {
            if (!response.isSuccess) {
              return DeleteArtistServiceFailAction({
                payload: response.message,
              });
            }
            //this.store.dispatch(RemoveOpenedModalAction());
            return DeleteArtistServiceSuccessAction({
              response: response.model,
            });
          }),
          catchError((error) =>
            of(DeleteArtistServiceFailAction({ payload: error }))
          )
        )
      )
    )
  );
}
