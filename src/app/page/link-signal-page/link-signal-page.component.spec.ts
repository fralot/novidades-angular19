import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSignalPageComponent } from './link-signal-page.component';

describe('LinkSignalPageComponent', () => {
  let component: LinkSignalPageComponent;
  let fixture: ComponentFixture<LinkSignalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkSignalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkSignalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
