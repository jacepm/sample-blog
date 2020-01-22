import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any;
  loading: Boolean = false;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.login();
  }

  login() {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  submit(value: any) {
    this.api
      .post("/user/login", value)
      .then((res: any) => {
        this.user = res.data;
        this.loading = true;
        localStorage.setItem("token", res.meta.token);
        this.router.navigate(["/blog"]);
      })
      .catch(error => {
        this.loading = false;
        console.log(error);
      });
  }

}
