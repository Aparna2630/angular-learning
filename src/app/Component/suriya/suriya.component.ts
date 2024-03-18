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

  suriyaForm = this.fb.group({
    value1 : [''],
    value2 : ['']
  },{
    validator : suriyaValidation.suriyaValidation('value1','value2')
  })
}
