import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  data:any = [];
  constructor() { }

  allforms(){
    return this.data;
  }
  addData(entry:any){
    this.data.push(entry);
  }
}
