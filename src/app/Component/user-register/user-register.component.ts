import { HttpClient } from '@angular/common/http';
import { compileClassMetadata } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  model: any = {};
  @Input() userFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  constructor(private serviceAccount: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.serviceAccount.register(this.model).subscribe(response => {
      alert('Registeration completed');
      this.cancel();
    }, error => {
      this.toastr.error(error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
