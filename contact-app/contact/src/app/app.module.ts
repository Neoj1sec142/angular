import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModuleModule } from './base/base-module.module';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [		
    AppComponent,
      HomeComponent,
      NotfoundComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BaseModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
