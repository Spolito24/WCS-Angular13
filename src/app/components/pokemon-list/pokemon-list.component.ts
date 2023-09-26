import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];

  @Output()
  pokemonToDetail: EventEmitter<Pokemon> = new EventEmitter();

  sendPokemon(pokemon: Pokemon): void {
    this.pokemonToDetail.emit(pokemon);
  }
}
