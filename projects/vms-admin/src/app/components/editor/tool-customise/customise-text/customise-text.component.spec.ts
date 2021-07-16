import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseTextComponent } from './customise-text.component';

describe('CustomiseTextComponent', () => {
  let component: CustomiseTextComponent;
  let fixture: ComponentFixture<CustomiseTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
