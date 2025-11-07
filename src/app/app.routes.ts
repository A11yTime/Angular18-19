import { Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { UserListComponent } from './user-list/user-list.component';
import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';


export const routes: Routes = [
  { path: 'features', component: FeatureComponent, data: { title: 'Features' } },
  { path: 'users', component: UserListComponent, data: { title: 'User' } },
  { path: 'counter', component: CounterComponent, data: { title: 'Counter' } },
  { path: 'pipe', component: ProductComponent, data: { title: 'Pipes' } },
  { path: 'user', component: UserComponent, data: { title: 'UserLagacy' } },
  { path: 'products', component: ProductsComponent, data: { title: 'Components Lagacy' } },
 
  { path: '', redirectTo: 'features', pathMatch: 'full' } 
    // {path: 'counter', loadComponent: () => import('./counter/counter.component').then(m => m.CounterComponent)},
    // {path: 'users', loadComponent: () => import('./user-list/user-list.component').then(m => m.UserListComponent)},
];
