import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomVariableComponent } from './bottom-variable.component';

describe('BottomVariableComponent', () => {
  let component: BottomVariableComponent;
  let fixture: ComponentFixture<BottomVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
