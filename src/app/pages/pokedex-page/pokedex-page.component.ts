import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/Pokemon';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss'],
})
export class PokedexPageComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(public pokedexService: PokedexService) {}

  pokemonDetail(event: Pokemon): void {
    console.log(event);
  }

  ngOnInit(): void {
    this.pokedexService.getPokedex().subscribe((pokemonsFromJsonFile) => {
      this.pokemons = pokemonsFromJsonFile;
      console.log(this.pokemons);
    });
  }
}
