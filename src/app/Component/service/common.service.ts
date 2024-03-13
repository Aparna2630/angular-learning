import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  UserArray: Array<any> = [
    { id: 1, name: 'name_1' },
    { id: 2, name: 'name_2' },
    { id: 3, name: 'name_3' },
    { id: 4, name: 'name_4' },
    { id: 5, name: 'name_5' },
    { id: 6, name: 'name_6' },
    { id: 7, name: 'name_7' },
    { id: 8, name: 'name_8' },
    { id: 9, name: 'name_9' },
    { id: 10, name: 'name_10' }]



    AddData(data:any){

      this.UserArray.push(data)
    }
}
