import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/User';
import { AuthService } from './_services/auth.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user!: User;
  userHttpOpts!: HttpHeaders;
  isAuthenticatied!: boolean;
  private readonly _authSvc!: AuthService;
  constructor(_authSvc: AuthService) {
    
  }
  ngOnInit(): void {
    forkJoin([
      this.checkAuth(),
      this.getAuthHeaders()
    ])
  }
  checkAuth(){
    this._authSvc.refreshToken().subscribe((isAuth: boolean) => {
      this.isAuthenticatied = isAuth;
    })
  }
  getAuthHeaders(): void {
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken !== null){
      const headers = new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      });
      this.userHttpOpts = headers;
    }else{
      this.userHttpOpts = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
  }
}
