import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor( private data: APIService, private http: Http) { }
  name: string 
  address: string 
  email: string 
  number: string 
  companyname: string 
  UserList: object[] = [];

  ngOnInit() {

  }

  AddUser(){
    console.log(this.UserList);
    this.data.AddData();

  }
}
