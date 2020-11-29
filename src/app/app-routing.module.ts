import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { CartService } from './../services/cart.service';
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detail/:id', component: ComicDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-success', component: OrderSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
