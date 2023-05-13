import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostDto } from '../_models/Post';
import { CommentDto } from '../_models/Comment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  pURL: string = "http://localhost:8000/blog/posts/";
  cURL: string = "http://localhost:8000/blog/comments/";
  
  constructor(private http: HttpClient) { }
  // Post Funcs
  createPost(p: PostDto){
    return this.http.post<PostDto>(this.pURL, p)
  }
  getPosts(){
    return this.http.get<Post[]>(this.pURL)
  }
  getPost(id: number){
    return this.http.get<Post>(`${this.pURL}${id}/`)
  }
  updatePost(p: Post){
    return this.http.put<Post>(this.pURL, p)
  }
  deletePost(id: number){
    return this.http.delete(`${this.pURL}${id}/`)
  }
  // Comment Funcs
  createComment(c: CommentDto){
    return this.http.post<CommentDto>(this.cURL, c)
  }
  getPostComments(id: number){
    // -> need to create view
    return this.http.get<Comment[]>(`${this.cURL}${id}/`)
  }
  getComment(id: number){
    return this.http.get<Comment>(`${this.cURL}${id}/`)
  }
  updateComment(c: Comment, id: number){
    return this.http.put<Comment>(`${this.cURL}${id}/`, c)
  }
  deleteComment(id: number){
    return this.http.delete<Comment>(`${this.cURL}${id}/`)
  }

}
