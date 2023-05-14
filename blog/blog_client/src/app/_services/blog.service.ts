import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostDto } from '../_models/Post';
import { CommentDto } from '../_models/Comment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  pURL: string = "http://localhost:8000/blog/posts/";
  cURL: string = "http://localhost:8000/blog/comments/";
  hd: any = {}
  constructor(
    private http: HttpClient,
    private authSvc: AuthService
    ) {
      this.hd = this.authSvc.getHeaders()
     }
  // Post Funcs
  createPost(p: PostDto){
    return this.http.post<PostDto>(this.pURL, p, {headers: this.hd})
  }
  getPosts(){
    return this.http.get<Post[]>(this.pURL, {headers: this.hd})
  }
  getPost(id: number){
    return this.http.get<Post>(`${this.pURL}${id}/`, {headers: this.hd})
  }
  updatePost(p: Post){
    return this.http.put<Post>(this.pURL, p, {headers: this.hd})
  }
  deletePost(id: number){
    return this.http.delete(`${this.pURL}${id}/`, {headers: this.hd})
  }
  // Comment Funcs
  createComment(c: CommentDto){
    return this.http.post<CommentDto>(this.cURL, c, {headers: this.hd})
  }
  getPostComments(id: number){
    // -> need to create view
    return this.http.get<Comment[]>(`${this.cURL}${id}/`, {headers: this.hd})
  }
  getComment(id: number){
    return this.http.get<Comment>(`${this.cURL}${id}/`, {headers: this.hd})
  }
  updateComment(c: Comment, id: number){
    return this.http.put<Comment>(`${this.cURL}${id}/`, c, {headers: this.hd})
  }
  deleteComment(id: number){
    return this.http.delete<Comment>(`${this.cURL}${id}/`, {headers: this.hd})
  }

}
