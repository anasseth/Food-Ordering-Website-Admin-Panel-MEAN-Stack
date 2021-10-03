import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/globalService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminCredentials: any;
  email?: string;
  password?: string;
  newPassword?: string;
  isLogin: boolean = true;
  isChangePassword: boolean = false;

  constructor(public global: GlobalService, public router: Router) { }

  ngOnInit(): void {
    this.global.getIDpass().subscribe(
      (data) => {
        this.adminCredentials = data[0]
        console.log(this.adminCredentials)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  activeChangePassword() {
    this.isChangePassword = true;
    this.isLogin = false;
  }

  login() {
    if (this.isLogin) {
      if ((this.email != undefined || this.email != null) && (this.password != undefined || this.password != null)) {
        if ((this.email.toLowerCase() == this.adminCredentials.name) && (this.password == this.adminCredentials.password)) {
          alert("Login Successful")
          this.router.navigate(["/admin"])
          this.global.isLogin = true
        }
        else {
          alert("Email or Password is Incorrect")
          console.log(this.email)
          console.log(this.password)
        }
      }
      else {
        alert("Email or Password is Empty")
      }
    }
    else if (this.isChangePassword) {
      var obj = {
        password: this.password,
        newpassword: this.newPassword
      }
      this.global.updatePassword(obj)
    }
  }

}
