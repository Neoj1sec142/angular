import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User, UserDto } from '../_models/User';
import { LoginGroup } from '../_models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly RT: string = 'refresh_token';
  private baseUrl = "http://localhost:8000/";
  private apiUrl = "http://localhost:8000/users/";
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
  register(user: UserDto){
    return this.http.post<UserDto>(`${this.apiUrl}create/`, user);
  }
  login(as: LoginGroup){
    return this.http.post<UserDto>(`${this.baseUrl}token/obtain/`, as);
  }
  verify(): Observable<boolean> {
    const token = localStorage.getItem('refresh_token');
    return this.http.post(`${this.apiUrl}token/refresh/`, { refresh: token }).pipe(
      map((res: any) => {
        console.log(res, 'res verify');
        if (res.status === 200) {
          localStorage.setItem(this.RT, res.data.token);
          return true;
        } else {
          return false;
        }
      })
    );
  }
  logout(){
    const token = localStorage.getItem('refresh_token')
    return this.http.post(`${this.apiUrl}logout/`, token);
  }
}
