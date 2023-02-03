import { Injectable } from '@angular/core';
import { IArtistProfile, IConsumerProfile, ResultModel } from '@shared/models';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private requestService: RequestService) {}

  createArtistProfile(userId: string): Observable<ResultModel<IArtistProfile>> {
    return this.requestService.post<IArtistProfile>(
      `users/${userId}/artist/profile`,
      {}
    );
  }

  createConsumerProfile(
    userId: string
  ): Observable<ResultModel<IConsumerProfile>> {
    return this.requestService.post<IConsumerProfile>(
      `users/${userId}/consumer/profile`,
      {}
    );
  }
}
