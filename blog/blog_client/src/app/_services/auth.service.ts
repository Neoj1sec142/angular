import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserDto } from '../_models/User';

interface TokenResponse{
    access: string, 
    refresh: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private readonly API_URL = 'http://localhost:8000/';
    private readonly ACCESS_TOKEN_KEY = 'access_token';
    private readonly REFRESH_TOKEN_KEY = 'refresh_token';

    private readonly accessTokenSubject = new BehaviorSubject<string|null>(null);
    public readonly accessToken$ = this.accessTokenSubject.asObservable();

    constructor(private http: HttpClient) {
        const accessToken = localStorage.getItem(this.ACCESS_TOKEN_KEY);
        this.accessTokenSubject.next(accessToken);
    }

    public register(user: UserDto){
        return this.http.post(`${this.API_URL}/users/create/`, user)
    }
    
    public login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.API_URL}/token/obtain/`, {username, password}).pipe(
        tap((response: any) => {
            const {access, refresh} = response;
            this.setTokens(access, refresh);
            this.accessTokenSubject.next(access);
        })
        );
    }

    public refreshToken(): Observable<any> {
        const url = `${this.API_URL}/token/refresh/`;
        const refreshToken = this.getRefreshToken();
        if (!refreshToken) {
        return of(null);
        }
    return this.http.post<TokenResponse>(url, {refresh: refreshToken}).pipe(
      tap(response => this.setAccessToken(response.access)),
      tap(() => this.accessTokenSubject.next(this.getAccessToken()))
        );
    }

    public logout(): void {
        localStorage.removeItem(this.ACCESS_TOKEN_KEY);
        localStorage.removeItem(this.REFRESH_TOKEN_KEY);
        this.accessTokenSubject.next(null);
    }

    public isAuthenticated(): boolean {
        return !!this.getAccessToken();
    }

    private setTokens(accessToken: string, refreshToken: string): void {
        localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    }

    private setAccessToken(token: string): void {
        localStorage.setItem(this.ACCESS_TOKEN_KEY, token);
    }

    private getAccessToken(): string | null {
        return localStorage.getItem(this.ACCESS_TOKEN_KEY);
    }

    private getRefreshToken(): string | null {
        return localStorage.getItem(this.REFRESH_TOKEN_KEY);
    }

}
