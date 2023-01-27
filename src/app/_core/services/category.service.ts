import { Injectable } from '@angular/core';
import { ICategory, IService, ResultListModel } from '@shared/models';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private requestService: RequestService) {}

  getCategories(): Observable<ResultListModel<ICategory>> {
    return this.requestService.getList<ICategory>('categories');
  }

  getServicesByCategory(
    categoryId: string
  ): Observable<ResultListModel<IService>> {
    return this.requestService.getList('services', { category: categoryId });
  }
}
