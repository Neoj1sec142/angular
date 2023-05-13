import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { AuthUser, User } from './_models/User';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  currentUser!: any;
  isAuthenticated: boolean;
  userRoutes!: Routes;
  constructor(private authSvc: AuthService) {
    this.isAuthenticated = this.checkAuth(); 
  }
  ngOnInit(): void {
    console.log(this.isAuthenticated)
    this.getAvailableRoutes()
  }
  
  checkAuth(): boolean{
    if(!this.authSvc.isAuthenticated()){
      this.authSvc.logout();
      return false;
    }else{
      this.authSvc.refreshToken()
      return true
    }
  }
  
  getAvailableRoutes(){
    if(!this.authSvc.isAuthenticated()){
      // Public Routes
      this.userRoutes = [
        { path: 'land', title: 'Home Page' },
        { path: 'login', title: 'Login' },
        { path: 'register', title: 'Register' },
      ];
    }else{
      // Authenticated Routes
      this.userRoutes = [
        { path: 'land', title: 'Home Page' },
        { path: 'logout', title: 'Logout' },
        { path: 'dashboard', title: 'Dashboard', data: {requiresAuth: true} },
        { path: 'new-post', title: 'New Post', data: {requiresAuth: true} },
      ];
    }
  }
  getCurrentUser(): void{
    return this.currentUser = this.authSvc.currentUser;
  }
}
