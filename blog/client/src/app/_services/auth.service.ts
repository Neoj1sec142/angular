import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { User, UserDto } from '../_models/User';
import { LoginGroup } from '../_models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly RT: string = 'refreshToken';
  private readonly AT: string = 'accessToken';
  private baseUrl = "http://localhost:8000/";
  private apiUrl = "http://localhost:8000/users/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  getAll(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }
  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${id}/`);
  }
  update(id: number, user: UserDto): Observable<UserDto> {
    return this.http.put<UserDto>(`${this.apiUrl}${id}/`, user);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
  register(data: UserDto){
    return this.http.post<UserDto>(`${this.apiUrl}create/`, data, this.httpOptions)
  }
  login(data: LoginGroup): Observable<any> {
    const url = `${this.baseUrl}token/obtain/`;
    return this.http.post<any>(url, data, this.httpOptions).pipe(
      tap((res: any) => {
        console.log(res, "LOGIN RES")
        localStorage.setItem(this.AT, res.accessToken);
        localStorage.setItem(this.RT, res.refreshToken);
      })
    );
  }
  refreshToken(): Observable<any> {
    const url = `${this.baseUrl}/token/refresh`;
    if(!localStorage.getItem(this.RT)){
      return of(false);
    }else{
      // const data = localStorage.getItem(this.RT);
      // console.log(data, "REFRESH")
      // this.http.post<any>(url, data, this.httpOptions).subscribe((res: any) => {
      //   console.log(res, "REFRESH")
      //   localStorage.setItem(this.AT, res.data.access);
      //   localStorage.setItem(this.RT, res.data.refresh);  
      // })
      // return of(true)
      const refreshToken = localStorage.getItem(this.RT);
      const data = { refresh: refreshToken };
      return this.http.post<any>(url, data, this.httpOptions).pipe(
        tap((res: any) => {
          console.log(res, "REFRESH");
          localStorage.setItem(this.AT, res.data.access);
          localStorage.setItem(this.RT, res.data.refresh);
        }),
        map((res: any) => true), // return an Observable of true if the request was successful
        catchError((err) => {
          console.log(err, "REFRESH ERR");
          return of(false); // return an Observable of false if there was an error
        })
      );
    }
  }
  logout(){
    const token = localStorage.getItem(this.RT)
    localStorage.removeItem(this.AT);
    localStorage.removeItem(this.RT);
    return this.http.post(`${this.apiUrl}logout/`, token);
  }
}
