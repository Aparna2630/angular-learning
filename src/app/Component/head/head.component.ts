import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Common} from '../../models/common'
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit,AfterViewInit {

  DetailsArray: Array<any> = []
  Name: string = ''
  email: string = ''
  Address: string = ''
  price: number = 54879865554421
  UserArrays: Array<any> = []
  ArrayData : Array<any> = []

  constructor(private commonservice: CommonService) {
    console.log('Constructor is calling')
  }


  ngOnInit(): void {
    this.UserArrays = this.commonservice.UserArray

    console.log(this.UserArrays,'OnInit is called')
  }

  ngAfterViewInit(): void {

    this.UserArrays.map(e=>{
      this.ArrayData.push(e)
    })
  }

  AddData() {
    var arrayy = {
      id: 10, name: 'john'
    }

    this.commonservice.AddData(arrayy)
    this.ArrayData.push(arrayy)
  }


  AddDatahead() {
    var arrayy : Common = {
      id: 10, name: 'john head'
    }
    
    this.ArrayData.push(arrayy)
  }


  OnSubmit() {
    this.DetailsArray.push({ Name: this.Name, email: this.email, Address: this.Address })
  }


  OnDelete(i: number) {
    console.log(i, "[[[")
    this.DetailsArray.splice(i, 1)
  }



}
