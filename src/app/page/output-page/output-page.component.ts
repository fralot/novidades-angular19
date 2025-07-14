import { Component } from '@angular/core';
import { OutputComponent } from "./output/output.component";

@Component({
  selector: 'app-output-page',
  imports: [OutputComponent],
  templateUrl: './output-page.component.html',
  styleUrl: './output-page.component.scss'
})
export class OutputPageComponent {
  count: number = 0;
  clicked(): void {
    this.count++;
  }
}
