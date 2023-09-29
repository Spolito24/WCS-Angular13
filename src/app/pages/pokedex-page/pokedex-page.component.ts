import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/Pokemon.model';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss'],
})
export class PokedexPageComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonToDetail: Pokemon = new Pokemon('', '', '');
  constructor(public pokedexService: PokedexService) {}

  pokemonDetail(event: Pokemon): void {
    this.pokemonToDetail = event;
  }

  ngOnInit(): void {
    this.pokemons = this.pokedexService.getPokemons();
  }
}
