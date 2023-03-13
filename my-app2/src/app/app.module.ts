import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonServiceService } from './services/pokemon-service.service';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    PokemonBaseModule
  ],
  providers: [
    PokemonServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
