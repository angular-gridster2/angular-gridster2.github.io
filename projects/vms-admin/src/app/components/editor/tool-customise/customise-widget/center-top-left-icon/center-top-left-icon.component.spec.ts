import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterTopLeftIconComponent } from './center-top-left-icon.component';

describe('CenterTopLeftIconComponent', () => {
  let component: CenterTopLeftIconComponent;
  let fixture: ComponentFixture<CenterTopLeftIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterTopLeftIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterTopLeftIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
