import { UserTypeEnum } from '@shared/enums';
import { IUser } from '@shared/models';

export interface UserState {
  user: IUser;
  userType: UserTypeEnum;
}
