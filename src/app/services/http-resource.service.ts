// src/app/services/http-resource.service.ts
import { Injectable, signal, resource, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpResourceService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  private pokeName = signal<string | undefined>(undefined);

  constructor(private readonly http: HttpClient) {}

  public pokeResource = resource({
    loader: async () => {
      return this.http.get<Pokemon>(`${this.baseUrl}/${this.pokeName()}`).subscribe({
        next: (data) => data,
        error: (err) => {
          console.error('Error fetching Pokémon data:', err);
          return undefined;
        }
      });
    }
  });

  loadPokemon(name: string) {
    this.pokeName.set(name);
    return this.pokeResource;
  }

  reloadPokemon() {
    this.pokeResource.reload();
  }
}
