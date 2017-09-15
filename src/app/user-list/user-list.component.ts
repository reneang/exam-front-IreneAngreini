import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { APIService } from '../api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor( private data: APIService, private http: Http) { }

  ngOnInit() {

  }

  DeleteToDo(i) {
  this.data.removedata(i);  
  }
    
  
}
