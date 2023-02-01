import { ICategory, IService } from '@shared/models';

//provide all required information to use the application
export interface ProviderState {
  categories: Array<ICategory>;
  services: Array<IService>;
}
