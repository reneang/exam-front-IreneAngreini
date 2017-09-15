import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;  
import { RouterModule } from '@angular/router' ; 
import { HttpModule } from "@angular/http"; 
 
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

import { APIService} from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : 'UserList', component: UserListComponent},
      {path : '', component: AddUserComponent}
    ])

  ],
  exports: [RouterModule],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
