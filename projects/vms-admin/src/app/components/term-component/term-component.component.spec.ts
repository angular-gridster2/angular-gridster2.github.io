import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermComponentComponent } from './term-component.component';

describe('TermComponentComponent', () => {
  let component: TermComponentComponent;
  let fixture: ComponentFixture<TermComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
