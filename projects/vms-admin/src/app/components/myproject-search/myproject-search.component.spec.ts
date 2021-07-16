import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojectSearchComponent } from './myproject-search.component';

describe('MyprojectSearchComponent', () => {
  let component: MyprojectSearchComponent;
  let fixture: ComponentFixture<MyprojectSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprojectSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprojectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
