import { createAction, props } from '@ngrx/store';
import { IArtistProfile, IArtistService } from '@shared/models';

export enum ARTIST_SERVICES_ACTIONS {
  CREATE_ARTIST_SERVICE = '[USER] Create Artist Service',
  CREATE_ARTIST_SERVICE_SUCCESS = '[USER] Create Artist Service Success',
  CREATE_ARTIST_SERVICE_FAIL = '[USER] Create Artist Service Fail',

  DELETE_ARTIST_SERVICE = '[USER] Delete Artist Service',
  DELETE_ARTIST_SERVICE_SUCCESS = '[USER] Delete Artist Service Success',
  DELETE_ARTIST_SERVICE_FAIL = '[USER] Delete Artist Service Fail',
}

//ARTIST Services
export const CreateArtistServiceAction = createAction(
  ARTIST_SERVICES_ACTIONS.CREATE_ARTIST_SERVICE,
  props<{ userId: string; serviceId: string; cost: number }>()
);

export const CreateArtistServiceSuccessAction = createAction(
  ARTIST_SERVICES_ACTIONS.CREATE_ARTIST_SERVICE_SUCCESS,
  props<{ service: IArtistService }>()
);

export const CreateArtistServiceFailAction = createAction(
  ARTIST_SERVICES_ACTIONS.CREATE_ARTIST_SERVICE_FAIL,
  props<{ payload: any }>()
);

export const DeleteArtistServiceAction = createAction(
  ARTIST_SERVICES_ACTIONS.DELETE_ARTIST_SERVICE,
  props<{ serviceId: string }>()
);

export const DeleteArtistServiceSuccessAction = createAction(
  ARTIST_SERVICES_ACTIONS.DELETE_ARTIST_SERVICE_SUCCESS,
  props<{ response: boolean }>()
);

export const DeleteArtistServiceFailAction = createAction(
  ARTIST_SERVICES_ACTIONS.DELETE_ARTIST_SERVICE_FAIL,
  props<{ payload: any }>()
);
