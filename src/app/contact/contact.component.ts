import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;

  contactList: FormArray | undefined;

  constructor() {
    this.contactForm = new FormGroup (
      {
      uname : new FormControl("", Validators.compose([Validators.required,Validators.minLength(4), Validators.maxLength(8)])),
      contact : new FormArray(
        [
          new FormControl("", Validators.required)
        ]
      ),
      address : new FormControl()
    }
    )

  }

  show(fc:any) {
    console.log(fc);
  }
  AddContact() {
    this.contactList = this.contactForm.controls['contact'] as FormArray;
    this.contactList.push(new FormControl("", Validators.required))
  }

  remove(index: number) {
    this.contactList?.removeAt(index);
  }

}
