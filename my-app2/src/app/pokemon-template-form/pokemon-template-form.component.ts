import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonServiceService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  constructor(private pokemonService: PokemonServiceService) {
  }
  
  
  

  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    })
  }

}
