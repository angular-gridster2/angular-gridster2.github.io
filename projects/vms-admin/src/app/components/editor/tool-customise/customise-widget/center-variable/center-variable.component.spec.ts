import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterVariableComponent } from './center-variable.component';

describe('CenterVariableComponent', () => {
  let component: CenterVariableComponent;
  let fixture: ComponentFixture<CenterVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
