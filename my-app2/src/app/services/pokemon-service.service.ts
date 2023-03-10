import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

constructor() { }

getPokemon(): Pokemon[]{
  return [{
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
}

}
