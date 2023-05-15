import { Component, Input, OnInit } from '@angular/core';
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
  @Input() currentUser!: any;
  
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private blogService: BlogService,
    private router: Router
    ){}

  ngOnInit() {
    this.initForm()
    
  }
  onSubmit(){
    if(this.pForm.invalid){
      alert('Please check your form any try again.')
      return
    }
    
    const data: PostDto = {
      author: this.authSvc.currentUser.id,
      title: this.pForm.get('title')?.value,
      text: this.pForm.get('text')?.value,
      link: this.pForm.get('link')?.value
    }
    console.log(data, "POST AAAT")
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
