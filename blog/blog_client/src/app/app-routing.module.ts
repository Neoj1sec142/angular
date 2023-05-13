import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './base/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './_services/auth.service';
import { LandComponent } from './base/land/land.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PostCreateComponent } from './blog_activity/post-create/post-create.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, data: {requiresAuth: true} },
    { path: 'new-post', component: PostCreateComponent, data: {requiresAuth: true} },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  
  constructor(private authAvc: AuthService) {
    
  }
  
 
}
