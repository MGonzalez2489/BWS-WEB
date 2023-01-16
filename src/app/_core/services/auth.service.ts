import { Injectable } from '@angular/core';
import { ILogin } from '@shared/models';
import { ISession, ResultModel } from '@shared/models/response';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private requestService: RequestService) {}
  login(loginParams: ILogin): Observable<ResultModel<ISession>> {
    return this.requestService.post<ISession>('auth/login', loginParams);
  }
  signin(params: ILogin): Observable<ResultModel<ISession>> {
    return this.requestService.post<ISession>('auth/signin', params);
  }
}
