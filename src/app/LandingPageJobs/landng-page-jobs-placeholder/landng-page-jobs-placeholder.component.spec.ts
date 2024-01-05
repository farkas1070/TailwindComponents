import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandngPageJobsPlaceholderComponent } from './landng-page-jobs-placeholder.component';

describe('LandngPageJobsPlaceholderComponent', () => {
  let component: LandngPageJobsPlaceholderComponent;
  let fixture: ComponentFixture<LandngPageJobsPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandngPageJobsPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandngPageJobsPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
