import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { RxResourceService } from '../../services/rx-resource.service';
import { Pokemon } from '../../model/pokemon.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rx-resource-page',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './rx-resource-page.component.html',
  styleUrl: './rx-resource-page.component.scss'
})
export class RxResourcePageComponent {
  private readonly rxService = inject(RxResourceService);

  pokemon: Observable<Pokemon | null> = this.rxService.pokemon;
  loading = this.rxService.getLoading();
  error = this.rxService.getError();

  loadData() {
    this.rxService.loadPokemon('charizard');
  }

  reloadData() {
    this.rxService.reload();
  }
}
