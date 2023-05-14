import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostDto } from 'src/app/_models/Post';
import { User } from 'src/app/_models/User';

import { AuthService } from 'src/app/_services/auth.service';
import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  pForm!: FormGroup;
  user!: User;
  
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private blogService: BlogService,
    private router: Router
    ){
      
    }

  ngOnInit() {
    this.initForm()
    this.user = this.authSvc.getCurrentUser()
  }
  onSubmit(){
    if(this.pForm.invalid){
      alert('Please check your form any try again.')
      return
    }
    const data: PostDto = {
      author: this.user.id,
      title: this.pForm.value.author,
      text: this.pForm.value.author,
      link: this.pForm.value.link
    }
    this.blogService.createPost(data).subscribe(
      (res: any) => {
        console.log(res, "POST RES")
        if(res.status === 201){
          this.router.navigate(['/dashoard'])
        }
    }, (error) => {
      console.log(error, "POST ERR")
    });
  };
  initForm(){
    this.pForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      link: ''
    });
  }
}
