// src/app/services/http-resource.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpResourceService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  private loading = signal(false);
  private error = signal<unknown>(null);
  private data = signal<Pokemon | undefined>(undefined);

  constructor(private http: HttpClient) {}

  getData() {
    return this.data;
  }

  isLoading() {
    return this.loading;
  }

  getError() {
    return this.error;
  }

  loadPokemon(name: string) {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<Pokemon>(`${this.baseUrl}/${name}`).subscribe({
      next: (res) => {
        this.data.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err);
        this.loading.set(false);
      }
    });
  }

  reload() {
    const current = this.data();
    if (current?.name) {
      this.loadPokemon(current.name);
    }
  }
}
