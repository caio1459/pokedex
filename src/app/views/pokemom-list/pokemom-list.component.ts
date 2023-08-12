import { Component } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemom-list',
  templateUrl: './pokemom-list.component.html',
  styleUrls: ['./pokemom-list.component.sass'],
})
export class PokemomListComponent {
  pokemons!: any[];

  constructor(private pokemonService: PokemonServiceService) {
    this.pokemonService.getAllPokemons(151, 0).subscribe((data) => {
      this.pokemons = data.results;
      console.log(data.results);
    });
  }
}
