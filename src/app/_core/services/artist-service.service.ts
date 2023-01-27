import { Injectable } from '@angular/core';
import { IArtistProfile, ResultModel } from '@shared/models';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({ providedIn: 'root' })
export class ArtistServicesService {
  constructor(private requestService: RequestService) {}

  createArtistService(
    userId: string,
    serviceId: string,
    cost: number
  ): Observable<ResultModel<IArtistProfile>> {
    return this.requestService.post(`artist/${userId}/services/create`, {
      serviceId,
      cost,
    });
  }
}
