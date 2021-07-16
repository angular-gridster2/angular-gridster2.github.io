import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllThingComponent } from './all-thing.component';

describe('AllThingComponent', () => {
  let component: AllThingComponent;
  let fixture: ComponentFixture<AllThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
