import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductFormComponent } from './product-form-component/product-form-component';
import { ProductDetailComponent } from './product-detail-component/product-detail-component';

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'new', component: ProductFormComponent },
  { path: 'edit/:id', component: ProductFormComponent },
  { path: ':id', component: ProductDetailComponent }
];