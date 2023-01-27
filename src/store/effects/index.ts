import { AuthEffects } from './auth.effects';
import { ProviderEffects } from './provider.effects';
import { UiEffects } from './ui.effects';
import { UserEffects } from './user.effects';

export const effects = [AuthEffects, UserEffects, ProviderEffects, UiEffects];
