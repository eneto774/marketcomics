import { Injectable } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Injectable()
export class CartService {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  balance: any;
  constructor() {
    this.balance = this.getBalance();
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
    let totalBalance = this.cart.reduce((acum: number, elem: any) => {
      return acum + elem.totalPrice;
    },0);
    let rareBalance = this.cart.reduce((acum: number, elem: any) => {
        return elem.rare ? acum + elem.totalPrice : acum + 0;
    },0);
    let comumBalance = totalBalance - rareBalance;
    this.balance =  {
      totalBalance,
      comumBalance,
      rareBalance
    };
    return this.balance;
  }

}
