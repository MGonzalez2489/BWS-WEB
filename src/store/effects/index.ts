import { ArtistServicesEffects } from './artist-services.effects';
import { AuthEffects } from './auth.effects';
import { ProfileEffects } from './profile.effects';
import { ProviderEffects } from './provider.effects';
import { UiEffects } from './ui.effects';
import { UserEffects } from './user.effects';

export const AppEffects = [
  AuthEffects,
  ProfileEffects,
  UserEffects,
  ProviderEffects,
  ArtistServicesEffects,
  UiEffects,
];
