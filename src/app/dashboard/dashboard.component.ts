import { Component } from '@angular/core';

import { SharedService } from '../shared.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  statelist : any;
  constructor(public sharedService : SharedService) {
    this.statelist = this.sharedService.stateList
  }

  show(fc:any): void {
    console.log(fc)
    console.log('value = ', fc.value);
  }
}