import { IArtistService } from './artist-service.model';
import { BaseModel } from './_base.model';

export interface IArtistProfile extends BaseModel {
  services: Array<IArtistService>;
}
