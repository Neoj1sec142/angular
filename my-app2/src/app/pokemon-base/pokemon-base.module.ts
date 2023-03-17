import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonServiceService } from '../services/pokemon-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';
import { FormsModule } from '@angular/forms';
import { HighlighttextDirective } from '../_directives/highlighttext.directive';
import { CustomIfDirective } from '../_directives/customIf.directive';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PokemonListComponent },
      { path: ':id', component: PokemonTemplateFormComponent },
    ]
  }
]

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent,
    HighlighttextDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
    
  ],
  providers: [
    PokemonServiceService
  ],
  bootstrap: [HighlighttextDirective, CustomIfDirective]
})
export class PokemonBaseModule { }
