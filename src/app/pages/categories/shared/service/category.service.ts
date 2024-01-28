import { Injectable, Injector } from '@angular/core';
import { Category } from "../model/category.model";

import { BaseResourceService } from "../../../../shared/componentes/service/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseResourceService<Category> {

  constructor(protected injector: Injector) {
    super("api/categories", injector, Category.fromJson);
  }

}