import { Component, inject } from '@angular/core';
import { HttpResourceService } from '../../services/http-resource.service';
import { ResourceRef } from '@angular/core';
import { Pokemon } from '../../model/pokemon.interfaces';

@Component({
  selector: 'app-http-resource-page',
  standalone: true,
  templateUrl: './http-resource-page.component.html',
  styleUrl: './http-resource-page.component.scss'
})
export class HttpResourcePageComponent {
  private httpResourceService = inject(HttpResourceService);

  pokeResource: any;

  constructor() {
    this.pokeResource = this.httpResourceService.loadPokemon('pikachu');
  }

  loadData() {
    this.pokeResource = this.httpResourceService.loadPokemon('bulbasaur');
  }

  reloadData() {
    this.httpResourceService.reloadPokemon();
  }
}
