import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent {
  @Input()
  pokemonName!: string;

  @Input()
  idImg!: Number;

  carregarImagem(): String {
    const idImgFormatado = this.leadingZero(this.idImg.toString());
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idImgFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
