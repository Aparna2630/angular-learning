import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  isSubmitted: boolean = false

  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    Address: new FormControl('', [Validators.required]),
    ContactDetails: new FormGroup({
      mobile: new FormControl(''),
      alternateMobile: new FormControl(''),
    })
  })

  get f() {
    return this.userForm.controls
  }

  get contactf() {
    return this.f.ContactDetails.controls
  }


  OnSubmit() {

    this.isSubmitted = true

    if (this.userForm.status == 'VALID') {
      console.log(this.userForm.value)
    }
  }
}
