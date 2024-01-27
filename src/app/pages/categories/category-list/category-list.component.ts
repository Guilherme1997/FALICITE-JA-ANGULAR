import { Component, OnInit } from '@angular/core';

import { Category } from "../shared/category.model";

import { ToastrService } from 'ngx-toastr';

import { WebApiService } from '../../service/web.api.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: []
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: WebApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getCategories();
  }

  public categories: Category[] = [];

  getCategories() {
    this.categoryService.getAll().subscribe(
      response => {
        this.categories = response;
      }
    );
  }

  deleteCategory(category: Category) {
    const confirmDelet = confirm("Deseja realmente deletar esta categoria?");
    if (confirmDelet === true)
      this.categoryService.delete(category.id).subscribe(
        () => {
        this.categories = this.categories.filter(element => element != category),
          this.toastr.success('Categoria excluida', 'Sucesso!')
        }
      );
    else return
  }

}
