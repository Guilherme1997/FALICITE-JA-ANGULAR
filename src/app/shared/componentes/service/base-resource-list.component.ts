import { OnInit, Directive } from '@angular/core';

import { BaseResourceModel } from "../models/base-resource.models";
import { BaseResourceService } from "../service/base-resource.service";

@Directive()
export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  constructor(private resourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources.sort((a,b) => b.id - a.id),
      error => alert('Erro ao carregar a lista')
    )
  }



}
