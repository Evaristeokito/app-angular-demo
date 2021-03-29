import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './composants/product-add/product-add.component';
import { ProductListComponent } from './composants/product-list/product-list.component';

const routes: Routes = [
  {path : 'product-list' , component:ProductListComponent},
  {path : 'product-add' , component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
