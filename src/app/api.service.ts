import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class APIService {
  name: string 
  address: string 
  email: string 
  number: string 
  companyname: string 
  UserList: object[] = [];

  constructor(private http: Http) {     
  this.http.get('https://jsonplaceholder.typicode.com/users')
  .subscribe(
  result => {
    for (var i = 0; i< result.json().length; i++){
  var user = result.json()[i];
  var UObj = {
  'id': user.id,
  'name' : user.name,
  'email' : user.email,
  'number' : user.phone,
  'companyname' : user.company.name,
  'address' : user.address.street,
    };
    this.UserList.push(UObj);
  }
},
  error => {
    console.log(error);
    }
  );   }

  // defaultdata() {
  //   this.http.get('https://jsonplaceholder.typicode.com/users')
  //   .subscribe(
  //   result => {
  //     for (var i = 0; i< result.json().length; i++){
  //   var user = result.json()[i];
  //   var UObj = {
  //   'id': user.id,
  //   'name' : user.name,
  //   'email' : user.email,
  //   'number' : user.phone,
  //   'companyname' : user.company.name,
  //   'address' : user.address.street,
  //     };
  //     this.UserList.push(UObj);
  //   }
  // },
  //   error => {
  //     console.log(error);
  //     }
  //   );  
  // }
  removedata(id){
     for (var i = 0; i < this.UserList.length; i++) {
     if (id == this.UserList[i]["id"] ) {
     this.UserList.splice(i, 1);
     }
    }
  };

  AddData() :void {
           if (this.UserList.length != 0) {
             var lastId = this.UserList[this.UserList.length - 1]["id"];
             var obj = { 
             "id" : lastId + 1,      
             "name" : this.name,
             "email" : this.email,
             "number" : this.number,
             "companyname" : this.companyname,
             "address" : this.address,
          };    
          this.UserList.push(obj);
          console.log(this.UserList);
}

  }
}