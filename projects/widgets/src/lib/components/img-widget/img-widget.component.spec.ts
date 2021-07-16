import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgWidgetComponent } from './img-widget.component';

describe('ImgWidgetComponent', () => {
  let component: ImgWidgetComponent;
  let fixture: ComponentFixture<ImgWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
