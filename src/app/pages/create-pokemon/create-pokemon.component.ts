import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/Pokemon';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.scss'],
})
export class CreatePokemonComponent {
  newPokemon: Pokemon = new Pokemon('', '', '');

  constructor() {}

  onSubmit(): void {
    console.log(this.newPokemon);
  }
}
