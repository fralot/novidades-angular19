import { Injectable, signal, resource } from '@angular/core';
import { Pokemon } from '../model/pokemon.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  private pokemonName = signal<string | undefined>(undefined);

  PokeDataResource = resource({
    loader: async () => {
      return fetch(`${this.baseUrl}/${this.pokemonName()}`).then(
        (res) => res.json() as Promise<Pokemon>
      );
    },
  });

  loadPokemon(pokeName: string) {
    this.pokemonName.set(pokeName);
    return this.PokeDataResource;
  }

}
