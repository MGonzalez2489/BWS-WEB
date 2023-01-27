import { Injectable } from '@angular/core';
import { CategoryService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ICategory, IService, ResultListModel } from '@shared/models';
import * as ProviderActions from '@store/actions/provider.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProviderEffects {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProviderActions.GetCategoriesAction),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map((response: ResultListModel<ICategory>) => {
            return ProviderActions.GetCategoriesSuccessAction({
              categories: response.model,
            });
          }),
          catchError((error) =>
            of(ProviderActions.GetCategoriesFailAction({ payload: error }))
          )
        )
      )
    )
  );

  getServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProviderActions.GetServicesAction),
      mergeMap((data) =>
        this.categoryService.getServicesByCategory(data.category).pipe(
          map((response: ResultListModel<IService>) => {
            return ProviderActions.GetServicesSuccessAction({
              services: response.model,
            });
          }),
          catchError((error) =>
            of(ProviderActions.GetServicesFailAction({ payload: error }))
          )
        )
      )
    )
  );
}
