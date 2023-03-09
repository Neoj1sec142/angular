import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemon: string;
  constructor(){
    this.pokemon = "";
  }
  ngOnInit(): void {
      /* 
      This fires before everything
      loads on the page, giving
      you access to preload items
      */
  }
}
