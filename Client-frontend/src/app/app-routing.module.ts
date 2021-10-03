import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CartComponent } from './cart/cart.component';
import { ShopMainComponent } from './shop-main/shop-main.component';

const routes: Routes = [
  {
    path: '',
    component: ShopMainComponent,
  },
  {
    path: 'shop',
    component: ShopMainComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'login',
    component: AdminLoginComponent,
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
  },
  {
    path: '',
    redirectTo: '/shop',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }