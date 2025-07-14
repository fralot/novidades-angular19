import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResourcePageComponent } from './http-resource-page.component';

describe('HttpResourcePageComponent', () => {
  let component: HttpResourcePageComponent;
  let fixture: ComponentFixture<HttpResourcePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpResourcePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpResourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
