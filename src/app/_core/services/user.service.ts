import { Injectable } from '@angular/core';
import { IUser, ResultModel } from '@shared/models';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private requestService: RequestService) {}

  updateGeneral(user: IUser): Observable<ResultModel<IUser>> {
    return this.requestService.put<IUser>('users/update', user);
  }
}
