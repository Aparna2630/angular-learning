import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements AfterViewInit {

  msg: string = ''
  Message: string = ''
  MessageText: string = ''
  @ViewChild(PostComponent) postComp: any;

  UserArrays: Array<any> = []


  constructor( private commonservice:CommonService) {
    this.UserArrays = commonservice.UserArray
    console.log('Constructor is calling')
  }
  
  ngAfterViewInit(): void {
    this.Message = this.postComp.Message
  }

  suriyaMesage(value: any) {
    this.MessageText = value.target.value
  }

}
