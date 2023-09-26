import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];

  constructor() {}
}
