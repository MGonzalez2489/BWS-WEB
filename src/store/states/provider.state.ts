import { ICategory, IService } from '@shared/models';

export interface ProviderState {
  categories: ICategory[];
  services: IService[];
}
