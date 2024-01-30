import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BreadCrumbComponent } from '../componentes/bread-crumb/bread-crumb.component';
import { PageHeaderComponent } from '../componentes/page-header/page-header.component';
import { ServerErrorMessagesComponent } from '../componentes/server-error-messages/server-error-messages.component';
import { ModalComponent } from '../componentes/modal/modal.component';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MessagesModule
  ],
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    ServerErrorMessagesComponent,
    ModalComponent
  ],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // shared components
    BreadCrumbComponent,
    PageHeaderComponent,
    ServerErrorMessagesComponent,
    ModalComponent
  ]
})
export class SharedModule { }
