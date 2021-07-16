import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectAllResultComponent } from './my-project-all-result.component';

describe('MyProjectAllResultComponent', () => {
  let component: MyProjectAllResultComponent;
  let fixture: ComponentFixture<MyProjectAllResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProjectAllResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectAllResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
