import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  private apiKey = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getAllPokemons(limit: number, offset: number) {
    return this.http.get<any>(`${this.apiKey}?limit=${limit}&offset=${offset}`);
  }
  getPokemon(name: string) {
    return this.http.get<any>(`${this.apiKey}/${name}`);
  }
}
