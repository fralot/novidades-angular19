import { Component, ResourceRef } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { Pokemon } from '../../model/pokemon.interfaces';

@Component({
  selector: 'app-resource-page',
  standalone: true,
  imports: [],
  templateUrl: './resource-page.component.html',
  styleUrl: './resource-page.component.scss'
})
export class ResourcePageComponent {
  PokeResource: ResourceRef<Pokemon | undefined>;;

  constructor(private readonly resourceService: ResourceService) {
    this.PokeResource = this.resourceService.loadPokemon('pikachu');
  }

  loadData() {
    this.PokeResource = this.resourceService.loadPokemon('charizard')
    this.PokeResource.reload()
  }
}
