import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildPageComponent } from './view-child-page.component';

describe('ViewChildPageComponent', () => {
  let component: ViewChildPageComponent;
  let fixture: ComponentFixture<ViewChildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
