import { Component } from '@angular/core';

import { BaseResourceListComponent } from "../../../shared/componentes/service/base-resource-list.component";

import { Entry } from "../shared/entry.model";
import { WebApiService } from "../../service/web.api.service";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {

  constructor(private entryService: WebApiService) { 
    super(entryService);
  }

}
