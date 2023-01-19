import { IArtistProfile } from './artist-profile.model';
import { IConsumerProfile } from './consumer-profile.model';
import { BaseModel } from './_base.model';

export interface IUser extends BaseModel {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  fullName: string;
  gender: string;
  boardingRequired: boolean;

  consumerProfile?: IConsumerProfile;
  artistProfile?: IArtistProfile;
}
