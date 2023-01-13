import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces-pipe';
import { ProductsDetailComponent } from './product-detail/products-detail.component';
import { ProductDetailsGuard } from './product-detail/product-details.guard';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductsDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate:[ProductDetailsGuard], component: ProductsDetailComponent },
    ]),
    SharedModule,
  ]
})
export class ProductModule { }
