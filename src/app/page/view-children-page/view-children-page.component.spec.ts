import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenPageComponent } from './view-children-page.component';

describe('ViewChildrenPageComponent', () => {
  let component: ViewChildrenPageComponent;
  let fixture: ComponentFixture<ViewChildrenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildrenPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildrenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
