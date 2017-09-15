import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { APIService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string 
  address: string 
  email: string 
  number: string 
  companyname: string 
  UserList: object[] = [];
  Completed: boolean = false;

  constructor (private data: APIService, private http: Http){};
}