import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './products/form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products/form', component: FormComponent},
  {path: 'products/form/:id', component:FormComponent},
  {path: 'home', component: HomeComponent},

];
