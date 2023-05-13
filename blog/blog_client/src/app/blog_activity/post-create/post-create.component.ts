import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  pForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    
    ){}

  ngOnInit() {
    this.initForm()
  }
  onSubmit(){}
  initForm(){
    this.pForm = this.fb.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      text: ['', Validators.required],
      link: ''
    });
  }
}
