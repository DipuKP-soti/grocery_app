import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginClass = ''
  loginResponse = ''


  constructor(private fb: FormBuilder ,private auth: AuthService, private router: Router) { }

  loginForm = this.fb.group({
    email: [null, [Validators.required,Validators.email]],
    password: [null, [Validators.required,Validators.minLength(6)]],
  });

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  onFormSubmit(){
    this.auth.login(this.loginForm.value).subscribe(
      (response:any)=>{
        console.log(response);
        this.loginResponse = 'Login successful.';
        this.loginClass = 'alert-success';
        localStorage.setItem('token',response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigateByUrl('/home');
    },
    (err:any)=>{
      console.log(err);
      this.loginResponse = 'Login failed, try again!'
      this.loginClass = 'alert-danger'
    }
    )
  }

}
