import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageApproveWebsiteComponent } from './manage-approve-website.component';

describe('ManageApproveWebsiteComponent', () => {
  let component: ManageApproveWebsiteComponent;
  let fixture: ComponentFixture<ManageApproveWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageApproveWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageApproveWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
