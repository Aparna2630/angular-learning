import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {suriyaValidation} from '../validations/suriya'

@Component({
  selector: 'app-suriya',
  templateUrl: './suriya.component.html',
  styleUrls: ['./suriya.component.css']
})
export class SuriyaComponent {

  // value1 : any 
  // value2 : any 

  constructor (private fb:FormBuilder){}

  // suriyaForm = this.fb.group({
  //   value1 : [''],
  //   value2 : ['']
  // },{
  //   validator : suriyaValidation.suriyaValidation('value1','value2')
  // })

  // suriyaForm = new FormGroup({
  //   value1 : new FormControl(''),
  //   value2 :new FormControl('')
  // },suriyaValidation.suriyaValidation('value1','value2')
  // )


  suriyaForm = new FormGroup({
    value1: new FormControl(''),
    value2: new FormControl('')
  });

  suriyaValidationFn() {
   
   var c1 =  this.suriyaForm.controls['value1'].value
   var c2 =  this.suriyaForm.controls['value2'].value
  
   if (c1 && c2 && +c1 > +c2) {
    this.suriyaForm.setErrors({ 'suriyaValidation': true });
  } else {
    this.suriyaForm.setErrors(null);
  }
  

   return null
  }
}
