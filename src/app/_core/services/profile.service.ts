import { Injectable } from '@angular/core';
import { IUser, ResultModel } from '@shared/models';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private requestService: RequestService) {}

  createArtistProfile(userId: string): Observable<ResultModel<IUser>> {
    return this.requestService.post<IUser>(
      `users/${userId}/artist/profile`,
      {}
    );
  }

  createConsumerProfile(userId: string): Observable<ResultModel<IUser>> {
    return this.requestService.post<IUser>(
      `users/${userId}/consumer/profile`,
      {}
    );
  }
}
