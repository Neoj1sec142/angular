import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../_models/Post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  pURL: string = "http://localhost:8000/blog/posts/";
  cURL: string = "http://localhost:8000/blog/comments/";
  
  constructor(private http: HttpClient) { }
  // Post Funcs
  createPost(p: Post){}
  getPosts(){}
  getPost(id: number){}
  updatePost(p: Post){}
  deletePost(id: number){}
  // Comment Funcs
  createComment(c: Comment){}
  getPostComments(){}
  getComment(id: number){}
  updateComment(c: Comment){}
  deleteComment(id: number){}

}
