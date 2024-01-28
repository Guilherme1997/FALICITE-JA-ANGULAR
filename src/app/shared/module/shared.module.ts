import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PageHeaderComponent } from '../componentes/page-header/page-header.component';
import { BreadCrumbComponent } from '../componentes/bread-crumb/bread-crumb.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  declarations: [
    PageHeaderComponent,
    BreadCrumbComponent
  ],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PageHeaderComponent,
    BreadCrumbComponent

  ]
})
export class SharedModule { }
