import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { nospace } from '../validations/nospace.validators';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  isSubmitted: boolean = false

  constructor(public fb: FormBuilder) { }
  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required,nospace.noSpceValidation]),
    email: new FormControl('', [Validators.required, Validators.email]),
    Address: new FormControl('', [Validators.required]),
    ContactDetails: new FormGroup({
      mobile: new FormControl(''),
      alternateMobile: new FormControl(''),
    })
  })

  // userForm = this.fb.group({
  //   fullName: ['', nospace.noSpceValidation],
  //   email: [''],
  //   Address: [''],
  //   ContactDetails: this.fb.group({
  //     mobile: [''],
  //     alternateMobile: [''],
  //   })
  // })
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
