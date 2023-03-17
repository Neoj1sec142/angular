import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  pokemons!: Pokemon[];
  @ViewChildren('pokemonRef') pokemonRef!: ElementRef
  constructor(private pokemonService: PokemonServiceService){
    
  }
  handleRemove(event: Pokemon){
    this.pokemons = this.pokemons.filter(( pokemon: Pokemon ) => {
      return pokemon.id !== event.id;
    })
  }
  ngOnInit(): void {
      this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
        console.log(data);
        this.pokemons = data;
      });
  }
  ngAfterViewInit(): void{
    console.log(this.pokemonRef)
  }
}
