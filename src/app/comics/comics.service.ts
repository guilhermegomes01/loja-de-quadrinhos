import { fullUrl } from './../app.api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ComicsService {


  constructor(private http: HttpClient) { }

  getComics(quantityLimit?, quantityOffset?) {
    let limit = quantityLimit;
    let offset = (Math.random() * quantityOffset);

    if(limit == undefined) {
      limit = 100;
    }

    //Caso o offset seja verdadeiro, colocá-lo na url
    if(quantityOffset != null || quantityOffset != '' || quantityOffset != NaN) {
      return this.http.get(`${fullUrl}&limit=${limit}&offset=${offset}`);
    } 
    else
    return this.http.get(`${fullUrl}&limit=${limit}`);
  }

  getComicById(id: string) {
    return this.http.get(`${fullUrl}&id=${id}`);
  }

  //Função que mostra os lançamentos da última semana
  getComicByDateRange() {
    return this.http.get(`${fullUrl}&dateDescriptor=thisWeek&orderBy=-focDate`);
  }
}
