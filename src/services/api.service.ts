import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly BASE_URL : string = 'http://gateway.marvel.com/v1';
  readonly API_KEY : string = '6db6d6b82e659d285339a8f2c29adcf5';
  constructor(private http: HttpClient) { }

  public getComics() : Observable<any>{
    return this.http.get(`${this.BASE_URL}/public/comics?apikey=${this.API_KEY}`);
  }
  public getDetailComic(id: number) : Observable<any>{
    return this.http.get(`${this.BASE_URL}/public/comics/${id}?apikey=${this.API_KEY}`);
  }
  public getComicsPages(offset) : Observable<any>{
    return this.http.get(`${this.BASE_URL}/public/comics?offset=${offset}&apikey=${this.API_KEY}`);
  }


  public getTotalComics(limit) : Observable<any>{
    return this.http.get(`${this.BASE_URL}/public/comics?limit=${limit}&apikey=${this.API_KEY}`);
  }
}
