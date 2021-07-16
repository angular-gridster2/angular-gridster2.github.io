import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseButtonComponent } from './customise-button.component';

describe('CustomiseButtonComponent', () => {
  let component: CustomiseButtonComponent;
  let fixture: ComponentFixture<CustomiseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
