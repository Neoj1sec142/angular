import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [{
    id: 1,
    name: 'pikachu',
    type: 'electric',
    isCool: false,
    isStylish: false
  },{
    id: 2,
    name: 'squirtle',
    type: 'water',
    isCool: true,
    isStylish: true
  },{
    id: 3,
    name: 'charmander',
    type: 'fire',
    isCool: false,
    isStylish: true
  },{
    id: 4,
    name: 'bulbasaur',
    type: 'grass',
    isCool: true,
    isStylish: false
  }]
  constructor(){
    
  }
  ngOnInit(): void {
      
  }
}
