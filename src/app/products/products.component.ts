import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  response: any;
  constructor(public sharedService: SharedService) {

  }

  RetriveProductsData() {
    
    this.sharedService.getProducts().subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
      }
    );
  }

}
