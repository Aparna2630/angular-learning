import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent {

@Input() parentmsg: String = ''

@Output() suriya = new EventEmitter <string>

Title : string = ''
Description : string = ''
image : string = ''
postUrl : string = ''
TitleColor : boolean = false


Message(value:any){
  this.suriya.emit(value)
}


}