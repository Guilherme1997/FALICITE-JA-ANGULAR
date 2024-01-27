import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories', loadChildren:
      () => import('./pages/categories/categories.module')
        .then(category => category.CategoriesModule)
  },
  {
    path: "entries", loadChildren: () => import('./pages/entries/entries.module')
      .then(
        entries => entries.EntriesModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
