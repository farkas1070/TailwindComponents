import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandngPageJobsContentComponent } from './landng-page-jobs-content.component';

describe('LandngPageJobsContentComponent', () => {
  let component: LandngPageJobsContentComponent;
  let fixture: ComponentFixture<LandngPageJobsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandngPageJobsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandngPageJobsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
