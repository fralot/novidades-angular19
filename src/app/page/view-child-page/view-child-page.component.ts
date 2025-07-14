import { Component } from '@angular/core';
import { ViewChildComponent } from "./view-child/view-child.component";

@Component({
  selector: 'app-view-child-page',
  imports: [ViewChildComponent],
  templateUrl: './view-child-page.component.html',
  styleUrl: './view-child-page.component.scss'
})
export class ViewChildPageComponent {

}
