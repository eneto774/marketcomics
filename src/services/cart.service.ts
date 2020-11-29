import { Injectable } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Injectable()
export class CartService {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  constructor() {
   }

  getCart() {
    return this.cart;
  }
  insertItem(comic: Comic) {
    this.cart.push(comic);
  }

  deleteItens() {
    localStorage.removeItem('cart');
    this.cart = [];
  }

  getBalance() {
    return this.cart.reduce((acum: number, elem: any) => {
      return acum + elem.totalPrice;
    },0);
  }
}
