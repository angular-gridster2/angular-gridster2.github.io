import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarPreviewComponent } from './topbar-preview.component';

describe('TopbarPreviewComponent', () => {
  let component: TopbarPreviewComponent;
  let fixture: ComponentFixture<TopbarPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
