import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { NotFoundComponent } from './pages/not-found-component/not-found-component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'users', 
    loadChildren: () => import('./features/users/users-module').then(m => m.UsersModule)
  },
  { 
    path: 'products', 
    loadChildren: () => import('./features/products/products-module').then(m => m.ProductsModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }