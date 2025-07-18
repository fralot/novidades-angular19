import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  // Input obrigatório
  firstName = input.required<string>();

  //outro exemplo com alias para input
  age = input(0, {alias: 'studentAge'});

  // Input opcional com valor padrão
  lastName = input('Doe');

  fullName = computed(() =>
    `${this.firstName()} ${this.lastName()}`
  );
}
