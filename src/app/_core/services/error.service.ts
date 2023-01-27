import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResultListModel, ResultModel } from '@shared/models';
import { BWSState } from '@store/states';
import * as ErrorActions from '@store/actions/error.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  constructor(private store: Store<BWSState>) {}

  setError(
    error: ResultModel<any> | ResultListModel<any> | string | HttpErrorResponse
  ): void {
    let errorMessage: string;

    errorMessage =
      error instanceof HttpErrorResponse
        ? error.error.message
        : error['message'] || error;

    errorMessage = errorMessage.replace(/^"(.+(?="$))"$/, '$1');

    this.store.dispatch(ErrorActions.SetErrorAction({ error: errorMessage }));
  }
  cleanError() {
    this.store.dispatch(ErrorActions.CleanErrorAction());
  }
}
