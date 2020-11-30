import { ComicDetailService } from 'src/services/comic-detail.service';
import { CartService } from './../../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  comic: any;
  error: any;
  totalCart: number;
  rare: boolean;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private cartService: CartService,
    private comicDetail: ComicDetailService) { }

  ngOnInit(): void {
    this.execute();
    this.rare = this.comicDetail.getRare();
    console.log(this.rare);
    this.totalCart = this.getTotalStorage();
  }

  execute() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.api.getDetailComic(this.id).subscribe((comic: any) => {
      this.comic = comic.data.results[0];
      Object.assign(this.comic, {"rare" : this.rare});
      console.log(this.comic);
    }, (error: any) => {
      this.error = error;
      console.error("Erro: ", error);
    })
  }

  insertItemOnCart() {
    this.cartService.insertItem({
      id: this.comic.id,
      price: 12.50,
      thumbnail: this.comic.thumbnail.path + "." + this.comic.thumbnail.extension,
      title: this.comic.title,
      qtd: 1,
      totalPrice: 12.50,
      rare: this.rare,
    });
    console.log(this.rare);
    let { totalBalance } = this.cartService.getBalance();
    this.totalCart = totalBalance;
    localStorage.setItem('cart', JSON.stringify(this.cartService.cart));
  }

  getTotalStorage(){
    let x = JSON.parse(localStorage.getItem('cart'));
    if (x) {
    return x.reduce((acum: number, elem: any) => {
      return acum + elem.totalPrice;
    },0);
  } else {
    return;
  }
  }
}
