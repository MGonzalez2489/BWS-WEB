import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RemoveOpenedModalAction, SetOpenedModalAction } from '@store/actions';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class UiEffects {
  constructor(private actions$: Actions, private modalService: NgbModal) {}

  closeModals$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RemoveOpenedModalAction),
        map(() => this.modalService.dismissAll())
      ),
    { dispatch: false }
  );
}
