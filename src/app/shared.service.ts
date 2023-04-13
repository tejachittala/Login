import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

   stateList = ['Andhra', 'Telemgana', 'Goa', 'Tamilnadu', 'Karnataka']
}
