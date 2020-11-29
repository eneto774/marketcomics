import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  data: Comic[];
  cart: Comic[];
  cupom: string;
  status_cupom: string;
  styleMsg: string;
  totalCupom: number;
  descontoValue: number;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.data = this.cartService.getCart();
    this.cart = this.data.reduce((acc, curr) => {
      let i = acc.map((o) => o.id).indexOf(curr.id);
      if(i == -1) {
        acc.push(curr);
      } else {
        acc[i].price += curr.price;
        acc[i].qtd += curr.qtd;
      }
      return acc;
    },[]);
    this.totalCupom = this.cartService.getBalance();
  }

  clearCart() {
    this.cartService.deleteItens();
    this.data = [];
    this.cart = [];
    this.descontoValue = 0;
    this.totalCupom = this.cartService.getBalance();
  }

  removeItem(id: number) {
    let index = this.cart.findIndex(cart => cart.id === id);
    console.log(id, index);
    this.cart.splice(index, 1);
    this.data.splice(index, 1);
    this.cartService.cart.splice(index,1);
    localStorage.setItem('cart', JSON.stringify(this.cartService.cart));
    this.totalCupom = this.cartService.getBalance();
  }

  aplicaDesconto(cupom: any){
    if(cupom === 'CUPOM20'){
      this.status_cupom = 'Cupom Valido';
      this.styleMsg = 'success';
      this.descontoValue = (this.totalCupom * 20) / 100;
      this.totalCupom = this.totalCupom - this.descontoValue;
    } else {
      this.status_cupom = "Cupom Invalido";
      this.styleMsg = 'error';
    }
  }
}
