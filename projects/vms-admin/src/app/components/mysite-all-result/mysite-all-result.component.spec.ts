import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysiteAllResultComponent } from './mysite-all-result.component';

describe('MysiteAllResultComponent', () => {
  let component: MysiteAllResultComponent;
  let fixture: ComponentFixture<MysiteAllResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysiteAllResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysiteAllResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
