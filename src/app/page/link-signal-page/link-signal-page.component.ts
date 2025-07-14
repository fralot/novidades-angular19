import { Component, signal, OnInit, linkedSignal, WritableSignal } from '@angular/core';
import { ModelComponent } from "../model-page/model/model.component";

@Component({
  selector: 'app-link-signal-page',
  imports: [ModelComponent],
  templateUrl: './link-signal-page.component.html',
  styleUrl: './link-signal-page.component.scss'
})
export class LinkSignalPageComponent implements OnInit {

  source: WritableSignal<number> = signal(10);

  readonly doubled = linkedSignal({
    source: () => this.source(),
    computation: (value: number) => value * 2
  });

  source2: WritableSignal<number> = signal(20);

  ngOnInit(): void {
    console.log(this.doubled()); // 20

    this.source.set(30);
    console.log(this.doubled()); // 60 (atualizado automaticamente)
  }

   name: WritableSignal<string> = signal('');


  lastname: WritableSignal<string> = signal('');

  fullName = linkedSignal({
    source: () => ({
      name: this.name(),
      lastname: this.lastname()
    }),
    computation: (source: { name: string; lastname: string }) => `${source.name} ${source.lastname}`
  });

}
