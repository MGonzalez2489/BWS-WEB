import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResultListModel, ResultModel } from '@shared/models';
import * as UiActions from '@store/actions/ui.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { AppState } from '@store/states/app.state';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  existingError: boolean;
  constructor(private store: Store<AppState>) {}

  setError(
    error: ResultModel<any> | ResultListModel<any> | string | HttpErrorResponse
  ): void {
    let errorMessage: string;

    errorMessage =
      error instanceof HttpErrorResponse
        ? error.error.message
        : error['message'] || error;

    errorMessage = errorMessage.replace(/^"(.+(?="$))"$/, '$1');

    this.store.dispatch(UiActions.SetErrorAction({ error: errorMessage }));
    this.existingError = true;
  }
  cleanError() {
    if (this.existingError) {
      this.store.dispatch(UiActions.CleanErrorAction());
      this.existingError = false;
    }
  }
}
