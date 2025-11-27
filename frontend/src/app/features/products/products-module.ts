import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';
import { ProductFormComponent } from './product-form-component/product-form-component';
import { ProductListComponent } from './product-list-component/product-list-component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductListComponent,
    ProductFormComponent,
    ProductDetailComponent
  ]
})
export class ProductsModule { }
