import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishWebsiteComponent } from './publish-website.component';

describe('PublishWebsiteComponent', () => {
  let component: PublishWebsiteComponent;
  let fixture: ComponentFixture<PublishWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
