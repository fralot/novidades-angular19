import { Component } from '@angular/core';
import { ModelComponent } from "./model/model.component";

@Component({
  selector: 'app-model-page',
  imports: [ModelComponent],
  templateUrl: './model-page.component.html',
  styleUrl: './model-page.component.scss'
})
export class ModelPageComponent {
  parentSearchTerm: string = '';

}


