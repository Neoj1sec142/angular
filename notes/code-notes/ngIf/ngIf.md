pokemonName: string = "";
handleChange(event: any){
    this.pokemonName = event.target.value 
}

<input type="'text" [value]="pokemonName" (input)="handleChange($event)" />
<p>{{ pokemonName }}</p>


<ng-container *ngIf="pokemonName.length; then PokemonList; else noPokemon">
</ng-container>
<ng-template #PokemonList>
    <h1>All Pokemon Avaliable</h1>
    .....
</ng-template>

<ng-template #noPokemon>
    <h1>No Pokemon Avaliable</h1>
    .....
</ng-template>

