import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemom-list',
  templateUrl: './pokemom-list.component.html',
  styleUrls: ['./pokemom-list.component.sass']
})
export class PokemomListComponent {
  pokemonCards = [0, 0, 0];
  pokemon: string[] = ["pikachu", "eve", "Char"]
}
