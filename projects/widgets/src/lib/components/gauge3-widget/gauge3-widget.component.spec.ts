import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gauge3WidgetComponent } from './gauge3-widget.component';

describe('Gauge3WidgetComponent', () => {
  let component: Gauge3WidgetComponent;
  let fixture: ComponentFixture<Gauge3WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gauge3WidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gauge3WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
