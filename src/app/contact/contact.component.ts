import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup (
      {
      uname : new FormControl(),
      contact : new FormControl(),
      address : new FormControl()
    }
    )

  }

  show(fc:any) {
    console.log(fc);
  }

}
