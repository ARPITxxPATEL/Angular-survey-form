import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  users:any;
  constructor(private userData: UserdataService) {
    this.users = userData.allforms();
  }

  ngOnInit(): void {
  }


  submitData(data:NgForm){
    this.userData.addData(data);
  }
}
