import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/module/shared.module';

import { EntriesRoutingModule } from './entries-routing.module';


import { CalendarModule } from "primeng/calendar";
import { IMaskModule } from "angular-imask";

import { EntryListComponent } from './entry-list/entry-list.component';


@NgModule({
  imports: [
    SharedModule,
    EntriesRoutingModule,
    CalendarModule,
    IMaskModule
  ],
  declarations: [EntryListComponent]
})
export class EntriesModule { }
