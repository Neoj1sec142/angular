import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { RegisterComponent } from '../register/register.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild(RegisterComponent) registerComponent!: RegisterComponent;
  submitted: boolean;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
    ) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
      this.submitted = false;
    }
  ngOnInit(): void {
    if(this.registerComponent.registerForm.value != null){ this.fillForm() }
  }
    
  onSubmit() {
    this.submitted = true;
    const { username, password } = this.loginForm.value;
    if(typeof(username) === 'string' && typeof(password) === 'string'){
      this.authService.login(username, password).subscribe(
        (res) => {
          // Login successful
        },
        (err) => {
          // Login failed
        }
      );
    }
    
  }

  fillForm() {
    const { username, password } = this.registerComponent.registerForm.value;
    this.loginForm.setValue({ username, password });
  }
}
