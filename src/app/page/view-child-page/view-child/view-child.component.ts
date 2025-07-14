import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent {
  contentDiv = viewChild<ElementRef>('content'); // Signal

  ngAfterViewInit() {
    console.log(this.contentDiv()?.nativeElement); // Acessa o elemento
  }
}
