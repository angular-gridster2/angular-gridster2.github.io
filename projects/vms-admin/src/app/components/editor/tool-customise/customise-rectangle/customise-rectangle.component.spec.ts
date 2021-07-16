import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseRectangleComponent } from './customise-rectangle.component';

describe('CustomiseRectangleComponent', () => {
  let component: CustomiseRectangleComponent;
  let fixture: ComponentFixture<CustomiseRectangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseRectangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
