import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, switchMap, tap, shareReplay } from 'rxjs';
import { Pokemon } from '../model/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RxResourceService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  private pokeName = new BehaviorSubject<string>('pikachu');
  private loading = new BehaviorSubject<boolean>(false);
  private error = new Subject<any>();

  public pokemon: Observable<Pokemon | null> = this.pokeName.pipe(
    tap(() => {
      this.loading.next(true);
      this.error.next(null);
    }),
    switchMap(name =>
      fetch(`${this.baseUrl}/${name}`)
        .then(res => {
          if (!res.ok) throw new Error('API error');
          return res.json();
        })
        .then(data => data as Pokemon)
        .catch(err => {
          this.error.next(err);
          return null;
        })
    ),
    tap(() => this.loading.next(false)),
    shareReplay(1)
  );

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  getError(): Observable<any> {
    return this.error.asObservable();
  }

  loadPokemon(name: string) {
    this.pokeName.next(name);
  }

  reload() {
    const current = this.pokeName.getValue();
    this.pokeName.next(current);
  }
}
