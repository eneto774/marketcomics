import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  constructor() {
   }

  getCart() {
    return this.cart;
  }
  insertItem(comic: any) {
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
