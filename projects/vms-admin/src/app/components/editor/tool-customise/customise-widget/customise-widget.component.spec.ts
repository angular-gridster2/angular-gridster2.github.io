import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseWidgetComponent } from './customise-widget.component';

describe('CustomiseWidgetComponent', () => {
  let component: CustomiseWidgetComponent;
  let fixture: ComponentFixture<CustomiseWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
