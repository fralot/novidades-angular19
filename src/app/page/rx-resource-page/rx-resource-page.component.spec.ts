import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxResourcePageComponent } from './rx-resource-page.component';

describe('RxResourcePageComponent', () => {
  let component: RxResourcePageComponent;
  let fixture: ComponentFixture<RxResourcePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxResourcePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxResourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
