import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient: HttpClient) { }

  getPaises() {
    return this.httpClient.get('https://restcountries.com/v3.1/region/europe').pipe(map((data: any) =>{
      return data.map((pais: any) =>({pais: pais.translations.spa.common, capital: pais.capital[0]}));
    }));
  }
}
