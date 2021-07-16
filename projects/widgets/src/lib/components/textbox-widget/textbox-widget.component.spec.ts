import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxWidgetComponent } from './textbox-widget.component';

describe('TextboxWidgetComponent', () => {
  let component: TextboxWidgetComponent;
  let fixture: ComponentFixture<TextboxWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
