import { CartService } from './../services/cart.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ComicDetailComponent,
    CartComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
