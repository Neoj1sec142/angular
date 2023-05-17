import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/_models/Post';
import { User } from 'src/app/_models/User';
import { AuthService } from 'src/app/_services/auth.service';
import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  editForm!: FormGroup;
  editPost!: Post;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private blogSvc: BlogService
  ) {
    
   }

  ngOnInit(): void {
    this.createForm();
    this.fillForm();
  }

  createForm(): void {
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      link: ['']
    });
  }
  
  
  fillForm(): void {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.editPost = {
          id: params['id'],
          title: params['title'],
          text: params['text'],
          author: params['author'],
          link: params['link'],
          comments: params['comments'],
          date_created: params['date_created'],
          date_modified: params['date_modified']
        };
  
        this.editForm.patchValue({
          title: this.editPost.title || '',
          text: this.editPost.text || '',
          link: this.editPost.link || ''
        });
      }
    });
  }

  onSubmit(): void {
    // console.log(this.editPost, "POSt")
    // console.log(this.editForm, "SUBMIT")
    if (this.editForm.invalid) {
      alert('Please check your form and try again.');
      return;
    }
    this.blogSvc.updatePost(this.editPost).subscribe(
      (res: any) => {
        console.log(res, "SUCCESS")
    }, (error: any) => {
      console.log(error, "Error")
    })
    this.router.navigate(['/dashboard'])
  }
  deletePost(e: Event){
    e.stopPropagation();
    this.blogSvc.deletePost(this.editPost.id).subscribe(
      (res: any) => {
        this.router.navigate(['/dashboard'])
        console.log(res, "SUCCESS")
      }, (error: any) => {
        console.log(error, "SUCCESS")
      })
  }
}
