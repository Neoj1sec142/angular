import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pokemon, PokemonType } from '../../models/pokemon';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: 'Fire'
    },
    {
      key: 1,
      value: 'Water'
    },
    {
      key: 2,
      value: 'Grass'
    },
    {
      key: 3,
      value: 'Psycic'
    },
  ]
  constructor(private pokemonService: PokemonServiceService,
    private router: Router, private route: ActivatedRoute) { }
  
  toggleIsCool(object: any){
    console.log(object)
  }

  handleSubmit(object: any){
    console.log(object)
  }

  ngOnInit() {
    this.pokemon = {} as Pokemon;
    this.route.params.subscribe((data: Params) => {
      const id = data['id']
      this.pokemonService.getPokemon(id).subscribe((data: Pokemon) => {
        console.log(data)
        this.pokemon = data;
      })
    })
  }
  back(): void{
    this.router.navigate(['/pokemon'])
  }
}
