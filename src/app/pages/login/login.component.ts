import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { Global } from 'src/app/shared/services/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  strMsg: string;
  submitted = false;

  constructor(private authService: AuthService, private _dataService: DataService, private _fb: FormBuilder, private _toastr: ToastrService) {
    this.strMsg = "";
    this.authService.logout();
  }

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this._fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  PostData(signupForm: any) {
    if (this.loginForm.valid) {
      this._dataService.post(Global.BASE_USER_ENDPOINT + "CustomerMaster/Login/", this.loginForm.value).subscribe(
        logindata => {
          if (logindata.isSuccess) {
            this.authService.login(logindata.data);
            this.strMsg = this.authService.getMessage();
            if (this.strMsg != "") {
              this._toastr.error(this.strMsg, "Login");
              this.reset();
            }
          } else {
            this._toastr.error("Invalid Credentials !", "Login");
            this.reset();
          }
        });
    } else {
      this._toastr.error("Login failed !", "Login");
      this.reset();
    }
  }
  reset() {
    this.loginForm.controls['userName'].setValue('');
    this.loginForm.controls['password'].setValue('');
  }


}
