import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLoginBaseComponent } from './layout-login-base.component';

describe('LayoutLoginBaseComponent', () => {
  let component: LayoutLoginBaseComponent;
  let fixture: ComponentFixture<LayoutLoginBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutLoginBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLoginBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
