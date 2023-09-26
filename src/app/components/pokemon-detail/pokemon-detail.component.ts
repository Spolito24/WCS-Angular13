import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/Pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {
  @Input() pokemonToDetail: Pokemon = new Pokemon('', '', '');
}
