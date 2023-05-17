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
      
     }
  // Post Funcs
  createPost(p: PostDto){
    const hd = this.authSvc.getAuthHeaders()
    return this.http.post<PostDto>(`${this.pURL}`, p, {headers: hd})
  }
  getPosts(){
    const hd = this.authSvc.getAuthHeaders()
    return this.http.get<Post[]>(this.pURL, {headers: hd})
  }
  getPost(id: number){
    const hd = this.authSvc.getAuthHeaders()
    return this.http.get<Post>(`${this.pURL}${id}/`, {headers: hd})
  }
  updatePost(p: Post){
    const hd = this.authSvc.getAuthHeaders()
    return this.http.put<Post>(this.pURL, p, {headers: this.hd})
  }
  deletePost(id: number){
    const hd = this.authSvc.getAuthHeaders()
    return this.http.delete(`${this.pURL}${id}/`, {headers: hd})
  }
  // Comment Funcs
  createComment(c: CommentDto){
    const hd = this.authSvc.getAuthHeaders()
    return this.http.post<CommentDto>(this.cURL, c, {headers: hd})
  }
  getPostComments(id: number){
    // -> need to create view
    const hd = this.authSvc.getAuthHeaders()
    return this.http.get<Comment[]>(`${this.cURL}${id}/`, {headers: hd})
  }
  getComment(id: number){
    const hd = this.authSvc.getAuthHeaders()
    return this.http.get<Comment>(`${this.cURL}${id}/`, {headers: hd})
  }
  updateComment(c: Comment, id: number){
    const hd = this.authSvc.getAuthHeaders()
    return this.http.put<Comment>(`${this.cURL}${id}/`, c, {headers: hd})
  }
  deleteComment(id: number){
    const hd = this.authSvc.getAuthHeaders()
    return this.http.delete<Comment>(`${this.cURL}${id}/`, {headers: hd})
  }

}
