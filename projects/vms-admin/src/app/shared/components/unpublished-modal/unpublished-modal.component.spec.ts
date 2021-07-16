import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpublishedModalComponent } from './unpublished-modal.component';

describe('UnpublishedModalComponent', () => {
  let component: UnpublishedModalComponent;
  let fixture: ComponentFixture<UnpublishedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpublishedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpublishedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
