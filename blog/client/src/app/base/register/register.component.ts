import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/_models/User';
import { AuthService } from 'src/app/_services/auth.service';
import { ConfirmAlertDialogComponent } from 'src/app/alerts/ConfirmAlertDialog/ConfirmAlertDialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  registerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private dialog: MatDialog,
    private router: Router
    ) {
    this.initForm()
   }
  ngAfterViewInit(): void {
    
  }

  ngOnInit() {
    
  }
  
  initForm(){
    this.registerForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }
  
  
  onSubmit(){
    if(this.registerForm.invalid){
      const dialogRef = this.dialog.open(ConfirmAlertDialogComponent, {
        data: {
          title: 'Form Invalid',
          message: 'Do you want to clear this form? This action cannot be undone.'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          this.registerForm.reset()
        }
      });
    }
    

    this.authSvc.register(this.registerForm.value).subscribe((data) => {
      console.log(data, "register")
      this.router.navigate(['/login'], { state: { data: data } })
    })
  }
}
