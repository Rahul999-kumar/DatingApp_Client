import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Component/home/home.component';
import { UserRegisterComponent } from './Component/user-register/user-register.component';
import { MemberListComponent } from './Component/member-list/member-list.component';
import { MemberDetailComponent } from './Component/member-detail/member-detail.component';
import { ListsComponent } from './Component/lists/lists.component';
import { MessagesComponent } from './Component/messages/messages.component';
import { SharedModule } from './Modules/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserRegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
