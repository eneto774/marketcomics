import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';
import { CartService } from './../../../services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comics: any;
  error: any;
  data: any;
  totalCart: number;
  page: number = 1;
  totalPage: number;
  constructor(
    private api: ApiService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.data = this.cartService.getCart();
    this.execute();
    this.totalCart = this.getTotalStorage();

  }

  execute() {
    this.api.getComics().subscribe((comics: any) => {
      this.comics = comics;
      console.log(this.comics);
    }, (error: any) => {
      this.error = error;
      console.error("Erro: ", error);
    })
  }

  getTotalStorage(){
    let x = JSON.parse(localStorage.getItem('cart'));
    return x.reduce((acum: number, elem: any) => {
      return acum + elem.totalPrice;
    },0);
  }

  previousPage() {
    if(this.page >= 20) {
    this.api.getComicsPages(this.page -= 20).subscribe((comics: any) => {
      this.comics = comics;
      console.log(this.comics);
    }, (error: any) => {
      this.error = error;
      console.error("Erro: ", error);
    })
  } else {
    return
  }
  };
  nextPage(){
    this.api.getComicsPages(this.page += 20).subscribe((comics: any) => {
      this.comics = comics;
      console.log(this.comics);
    }, (error: any) => {
      this.error = error;
      console.error("Erro: ", error);
    })
  };

  insertItemOnCart(id: number) {
    this.data = this.comics.data.results.filter(item => item.id === id);
    let index = this.cartService.cart.findIndex(item => item.id === id);
    if (index === -1) {
      this.cartService.insertItem({
        id: this.data[0].id,
        price: 12.50,
        rare: true,
        thumbnail: this.data[0].thumbnail.path + "." + this.data[0].thumbnail.extension,
        title: this.data[0].title,
        qtd: 1,
        totalPrice: 12.5
      });
    } else {
      let qtdComic = this.cartService.cart[index].qtd;
      this.cartService.cart[index].qtd = qtdComic += 1
      this.cartService.cart[index].totalPrice = this.cartService.cart[index].qtd * this.cartService.cart[index].price;
    }
    this.totalCart = this.cartService.getBalance();
    localStorage.setItem('cart', JSON.stringify(this.cartService.cart));
}

}
