import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  DetailsArray: Array<any> = []
  Name: string = ''
  email: string = ''
  Address: string = ''
  price: number = 54879865554421
  UserArrays: Array<any> = []


  constructor(private commonservice: CommonService) {
    console.log('Constructor is calling')
  }


  ngOnInit(): void {
    this.UserArrays = this.commonservice.UserArray    
    console.log('OnInit is called')
  }


  AddData() {
    var arrayy = {
      id: 10, name: 'john'
    }

    this.commonservice.AddData(arrayy)
  }


  AddDatahead() {
    var arrayy = {
      id: 10, name: 'john head'
    }
    
    this.UserArrays.push(arrayy)
  }


  OnSubmit() {
    this.DetailsArray.push({ Name: this.Name, email: this.email, Address: this.Address })
  }


  OnDelete(i: number) {
    console.log(i, "[[[")
    this.DetailsArray.splice(i, 1)
  }



}
