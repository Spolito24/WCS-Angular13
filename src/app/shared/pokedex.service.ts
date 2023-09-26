import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(public http: HttpClient) {}

  public getPokedex(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('assets/pokemons.json');
  }
}
