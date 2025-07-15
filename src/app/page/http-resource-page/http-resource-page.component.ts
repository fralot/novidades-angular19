import { Component, inject } from '@angular/core';
import { HttpResourceService } from '../../services/http-resource.service';
import { computed } from '@angular/core';

@Component({
  selector: 'app-http-resource-page',
  standalone: true,
  templateUrl: './http-resource-page.component.html',
  styleUrl: './http-resource-page.component.scss'
})
export class HttpResourcePageComponent {
  private readonly httpService = inject(HttpResourceService);

  data = this.httpService.getData();
  loading = this.httpService.isLoading();
  error = this.httpService.getError();

  constructor() {
    this.httpService.loadPokemon('pikachu');
  }

  loadData() {
    this.httpService.loadPokemon('bulbasaur');
  }

  reloadData() {
    this.httpService.reload();
  }
}
