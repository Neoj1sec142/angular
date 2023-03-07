import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemons: Pokemon[] = [{
    id: 1,
    name: 'pikachu',
    type: 'electric',
    isCool: false
  },{
    id: 2,
    name: 'squirtle',
    type: 'water',
    isCool: true
  },{
    id: 3,
    name: 'charmander',
    type: 'fire',
    isCool: false
  },{
    id: 4,
    name: 'bulbasaur',
    type: 'grass',
    isCool: true
  }]
  
  
  constructor(){
    
  }
  
}
