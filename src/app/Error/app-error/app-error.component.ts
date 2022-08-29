import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-error',
  templateUrl: './app-error.component.html',
  styleUrls: ['./app-error.component.css']
})
export class AppErrorComponent implements OnInit {
  baseUrl = 'https://localhost:44382/api/';
  validationErrors: string[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(x => {
      console.log(x);

    }, error => {
      console.log(error);
    })
  }

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(x => {
      console.log(x);

    }, error => {
      console.log(error);
    })
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(x => {
      console.log(x);

    }, error => {
      console.log(error);
    })
  }

  get401Error() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(x => {
      console.log(x);

    }, error => {
      console.log(error);
    })
  }

  get400Validationerror(){
    this.http.post(this.baseUrl + 'UserAccount/Register', {}).subscribe(x => {
      console.log(x);

    }, error => {
      console.log(error);
      this.validationErrors = error;
    })
  }

}
