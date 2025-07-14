import { Component } from '@angular/core';
import { output } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
 clicked = output<void>(); // Evento sem payload

  handleClick() {
    this.clicked.emit();
  }
}
