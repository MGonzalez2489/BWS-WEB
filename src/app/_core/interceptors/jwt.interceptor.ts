import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Store } from '@ngrx/store';
import { DestroyHook } from '@shared/components';
import { selectToken } from '@store/selectors';
import { AppState } from '@store/states/app.state';
import { Observable, of, takeUntil, throwError } from 'rxjs';

@Injectable()
export class JwtInterceptor extends DestroyHook implements HttpInterceptor {
  token: string;
  constructor(private store: Store<AppState>) {
    super();
    this.store
      .select(selectToken)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((token) => {
        this.token = token;
      });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isApiUrl = request.url.startsWith(environment.baseUrl);
    if (this.token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.token}` },
      });
    }

    return next.handle(request);

    //return next
    //.handle(request)
    //.pipe(catchError((x) => this.handleAuthError(x)));
  }
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    console.log('error authorization', err);
    if (err.status === 401 || err.status === 403) {
      alert(
        'La session finalizo, por favor inicia sesion de nuevo para continuar'
      );
      //this.sessionService.deleteSession();
      //this.router.navigateByUrl(`/auth`);
      return of(err.message);
    }
    return throwError(err);
  }
}
