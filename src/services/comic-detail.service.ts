import { Injectable } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Injectable({
  providedIn: 'root'
})
export class ComicDetailService {
  rare: boolean;
  constructor() { }

  setRare(rare: boolean) {
    this.rare = rare;
    console.log('Serviço:',this.rare);
  }

  getRare() {
    return this.rare;
  }
}
