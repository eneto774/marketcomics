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
  cupomAplicado: boolean = false;
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
    let { totalBalance } = this.cartService.getBalance();
    this.totalCupom = totalBalance;
  }

  clearCart() {
    this.cartService.deleteItens();
    this.data = [];
    this.cart = [];
    this.descontoValue = 0;
    let { totalBalance } = this.cartService.getBalance();
    this.totalCupom = totalBalance;
  }

  removeItem(id: number) {
    let index = this.cart.findIndex(cart => cart.id === id);
    console.log(id, index);
    this.cart.splice(index, 1);
    this.data.splice(index, 1);
    this.cartService.cart.splice(index,1);
    localStorage.setItem('cart', JSON.stringify(this.cartService.cart));
    let { totalBalance } = this.cartService.getBalance();
    this.totalCupom = totalBalance;
  }

  aplicaDesconto(cupom: any){
    if (this.cupomAplicado === false) {
    let cupons = [{name: "RARE5", rare: true, descont: 0.05}, {name: "CUPOM20", rare: false, descont: 0.2}]
    let index = cupons.findIndex(c => c.name === cupom);
    if(index === -1) {
      this.status_cupom = "Cupom Invalido";
      this.styleMsg = 'error';
      this.cupomAplicado = false;
    } else {
      this.status_cupom = 'Cupom Valido';
      this.styleMsg = 'success';
      if (cupons[index].rare === true){
        console.log(this.cartService.balance);
        let { totalBalance, rareBalance, comumBalance } = this.cartService.getBalance();
        this.descontoValue = (totalBalance * cupons[index].descont);
        let total = (totalBalance - this.descontoValue);
        this.totalCupom = this.totalCupom - this.descontoValue;
        this.cartService.balance = { totalBalance: total ,rareBalance, comumBalance }
        this.cupomAplicado = true;
      } else {
        let { totalBalance, rareBalance, comumBalance } = this.cartService.getBalance();
        this.descontoValue = ( comumBalance * cupons[index].descont);
        this.totalCupom = this.totalCupom - this.descontoValue;
        let total = (comumBalance - this.descontoValue);
        this.cartService.balance = { totalBalance: this.totalCupom , rareBalance, comumBalance: total }
        this.cupomAplicado = true;
      }
    }
  } else {
    return;
  }
}
}
