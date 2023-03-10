import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons!: Pokemon[];
  constructor(private pokemonService: PokemonServiceService){
    this.pokemons = this.pokemonService.getPokemon();
  }
  handleRemove(event: Pokemon){
    this.pokemons = this.pokemons.filter(( pokemon: Pokemon ) => {
      return pokemon.id !== event.id;
    })
  }
  ngOnInit(): void {
      
  }
}
