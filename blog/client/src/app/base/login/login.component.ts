import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginGroup } from 'src/app/_models/Login';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authSvc: AuthService
    ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.attemptLogin()

  }
  attemptLogin(){
    const loginData = history.state.data
    if(loginData){
      this.authSvc.login(loginData).subscribe((data: any) => {
        console.log(data)
      })
    }
  }
  onSubmit(){
    if(!this.loginForm.invalid){
      const form: LoginGroup = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      }
      this.authSvc.login(form).subscribe((data: any) => {
        console.log(data)
      })
    }
    
  }
}
