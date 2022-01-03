import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service'; 

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

  users:any;
  constructor(private userData: UserdataService) { 
    this.users = this.userData.allforms();
  }

  ngOnInit(): void {
  }

}
