import { BaseModel } from './_base.model';

export interface IArtistService extends BaseModel {
  cost: number;
  service: string;
}
