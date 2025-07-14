import { Component, signal, computed, OnInit, linkedSignal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-link-signal-page',
  imports: [],
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

  total = linkedSignal({
    source: () => ({
      source: this.source(),
      source2: this.source2()
    }),
    computation: ({ source, source2 }) => source + source2
  });

  ngOnInit(): void {
    console.log(this.doubled()); // 20
    console.log(this.total()); // 30 (10 + 20)

    this.source.set(30);
    console.log(this.doubled()); // 60 (atualizado automaticamente)

    console.log(this.total()); // 50 (20 + 30)
  }

}
