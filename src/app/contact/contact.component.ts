import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      uname : new FormControl('Teja', Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(8)])),
      contact : new FormControl(),
      address : new FormControl()
    }
    )

  }

  show(fc:any) {
    console.log(fc);
  }

}
