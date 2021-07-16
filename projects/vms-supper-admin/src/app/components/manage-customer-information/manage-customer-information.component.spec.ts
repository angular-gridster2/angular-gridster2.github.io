import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomerInformationComponent } from './manage-customer-information.component';

describe('ManageCustomerInformationComponent', () => {
  let component: ManageCustomerInformationComponent;
  let fixture: ComponentFixture<ManageCustomerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCustomerInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCustomerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
