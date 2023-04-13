import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

  }

  show(fc:any): void {
    console.log(fc)
    console.log('value = ', fc.value);

  
  }


}

