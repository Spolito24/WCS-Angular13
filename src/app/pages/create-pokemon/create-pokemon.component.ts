import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/Pokemon.model';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.scss'],
})
export class CreatePokemonComponent {
  newPokemon: Pokemon = new Pokemon('', '', '');

  constructor(private pokedexService: PokedexService) {}

  onSubmit(): void {
    this.pokedexService.addPokemon(this.newPokemon);
    alert('new pokemon added');
  }
}
