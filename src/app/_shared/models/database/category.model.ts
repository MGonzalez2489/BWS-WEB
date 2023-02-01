import { IService } from './service.model';
import { BaseModel } from './_base.model';

export interface ICategory extends BaseModel {
  name: string;
  displayName: string;
  services: Array<IService>;
}
