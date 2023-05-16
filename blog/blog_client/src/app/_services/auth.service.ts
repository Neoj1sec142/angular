import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User, UserDto } from '../_models/User';
import { Router } from '@angular/router';

interface TokenResponse{
    access: string, 
    refresh: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    currentUser!: any;
    private readonly API_URL = 'http://localhost:8000/';
    private readonly ACCESS_TOKEN_KEY = 'access_token';
    private readonly REFRESH_TOKEN_KEY = 'refresh_token';
    private readonly UID = 'user_id'
    private readonly accessTokenSubject = new BehaviorSubject<string|null>(null);
    public readonly accessToken$ = this.accessTokenSubject.asObservable();

    constructor(
        private http: HttpClient,
        // private header: HttpHeaders,
        private router: Router,
        ) {
        const accessToken = localStorage.getItem(this.ACCESS_TOKEN_KEY);
        this.accessTokenSubject.next(accessToken);
    }

    public register(user: UserDto){
        return this.http.post(`${this.API_URL}users/create/`, user)
    }
    
    public login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.API_URL}users/login/`, {username, password}).pipe(
        tap((response: any) => {
            console.log(response, 'LOGIN')
            if(response.access_token){
                const {access_token, refresh_token, user} = response;
                this.setTokens(access_token, refresh_token);
                this.setId(user.id)
                this.currentUser = user
                this.accessTokenSubject.next(access_token);
                this.router.navigate(['/dashboard'])
            }else{
                this.logout()
            }
        })
        );
    }

    public refreshToken(): Observable<any> {
        const url = `${this.API_URL}users/refresh/`;
        const refreshToken = this.getRefreshToken();
        if (!refreshToken) {
          return of(null);
        }
        return this.http.post<any>(url, { refresh: refreshToken }).pipe(
          tap(response => {
            this.setTokens(response.access_token, response.refresh_token);
            this.setId(response.user.id);
            this.currentUser = response.user;
          }),
          tap(() => this.accessTokenSubject.next(this.getAccessToken()))
        );
      }

    public logout() {
        const url = `${this.API_URL}users/logout/`
        
        return this.http.post(url, {refresh_token: this.getRefreshToken()}).subscribe((data: any) => {
            console.log(data, 'LOGOUT')
            localStorage.removeItem(this.ACCESS_TOKEN_KEY);
            localStorage.removeItem(this.REFRESH_TOKEN_KEY);
            this.accessTokenSubject.next(null);
        })
    }

    public isAuthenticated(): boolean {
        return !!this.getAccessToken();
    }

    private setTokens(accessToken: string, refreshToken: string): void {
        localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    }

    private getAccessToken(): string | null {
        return localStorage.getItem(this.ACCESS_TOKEN_KEY);
    }

    private getRefreshToken(): string | null {
        return localStorage.getItem(this.REFRESH_TOKEN_KEY);
    }
    public setId(id: any): void{
        return localStorage.setItem(this.UID, id)
    }
    public removeId(): void{
        return localStorage.removeItem(this.UID)
    }
    public getId(): string | null {
        return localStorage.getItem(this.UID)
    }
    public getUser(id: number){
        return this.http.get<User>(`${this.API_URL}users/${id}`)
    }
    public getUsers(){
        return this.http.get<User[]>(`${this.API_URL}users/`)
    }
    public getCurrentUser(): any{
        const sid = this.getId()
        if(sid){
            const id = parseInt(sid)
            this.http.get(`${this.API_URL}users/${id}/`).subscribe(
                (res: any) => {
                    console.log(res, "CURR")
                    this.updateCurrentUser(res)
                }, (err: any) => {
                    console.log(err)
                })
            }
    }
    public updateCurrentUser(user: any){
        this.currentUser = user
    }
    public getAuthHeaders(): any {
        const token = this.getAccessToken();
        if (token) {
            let headers = new HttpHeaders();
            headers.append('Authorization', `JWT ${token}`)
            return headers
            
        } else {
            return new HttpHeaders();
        }
    }
    
}
