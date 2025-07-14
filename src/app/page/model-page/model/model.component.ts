import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-model',
  imports: [FormsModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent {
    searchTerm = model('');
}
