import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private Https: HttpClient) { }

   stateList = ['Andhra', 'Telemgana', 'Goa', 'Tamilnadu', 'Karnataka']

   getProducts() {
    return this.Https.get('https://fakestoreapi.com/products')
   }
}
