import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseTextboxComponent } from './customise-textbox.component';

describe('CustomiseTextboxComponent', () => {
  let component: CustomiseTextboxComponent;
  let fixture: ComponentFixture<CustomiseTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
