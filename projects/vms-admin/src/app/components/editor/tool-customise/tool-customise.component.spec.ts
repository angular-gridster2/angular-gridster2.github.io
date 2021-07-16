import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCustomiseComponent } from './tool-customise.component';

describe('ToolCustomiseComponent', () => {
  let component: ToolCustomiseComponent;
  let fixture: ComponentFixture<ToolCustomiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolCustomiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolCustomiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
