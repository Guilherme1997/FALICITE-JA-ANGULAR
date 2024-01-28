import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntryListComponent } from './entry-list/entry-list/entry-list.component';
import { SharedModule } from 'src/app/shared/module/shared.module';



@NgModule({
  declarations: [EntryListComponent],
  imports: [
    CommonModule,
    SharedModule,
    EntriesRoutingModule,
  ]
})
export class EntriesModule { }
