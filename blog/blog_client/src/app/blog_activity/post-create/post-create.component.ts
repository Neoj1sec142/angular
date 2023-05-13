import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostDto } from 'src/app/_models/Post';
import { User } from 'src/app/_models/User';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  pForm!: FormGroup;
  user!: any;
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService
    ){}

  ngOnInit() {
    this.initForm()
  }
  onSubmit(){
    if(this.pForm.invalid){
      alert('Please check your form any try again.')
      return
    }
    // const data: PostDto = {
    //   // author: ,
    //   title: this.pForm.value.author,
    //   text: this.pForm.value.author,
    //   link: this.pForm.value.link
    // }
  }
  initForm(){
    this.pForm = this.fb.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      text: ['', Validators.required],
      link: ''
    });
  }
}
