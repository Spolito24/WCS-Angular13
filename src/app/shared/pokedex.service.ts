import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon.model';
import { MOCK_POKEMONS } from 'src/assets/pokemons';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private pokemons: Pokemon[] = [];

  constructor() {
    this.pokemons = MOCK_POKEMONS;
  }

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }
}
