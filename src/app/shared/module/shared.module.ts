import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BreadCrumbComponent } from '../componentes/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from '../componentes/page-header/page-header.component';
import { ServerErrorMessagesComponent } from '../componentes/server-error-messages/server-error-messages.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    ServerErrorMessagesComponent
  ],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // shared components
    BreadCrumbComponent,
    PageHeaderComponent,
    ServerErrorMessagesComponent
  ]
})
export class SharedModule { }
