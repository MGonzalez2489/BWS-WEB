import { IArtistProfile } from './artist-profile.model';
import { IConsumerProfile } from './consumer-profile.model';
import { BaseModel } from './_base.model';

export interface IUser extends BaseModel {
  FirstName: string;
  Lastname: string;
  Email: string;
  Phone: string;
  Fullname: string;
  Gender: string;

  ConsumerProfile?: IConsumerProfile;
  ArtistProfile?: IArtistProfile;
}
