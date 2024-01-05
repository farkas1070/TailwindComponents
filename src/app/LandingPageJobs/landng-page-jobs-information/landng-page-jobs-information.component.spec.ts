import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandngPageJobsInformationComponent } from './landng-page-jobs-information.component';

describe('LandngPageJobsInformationComponent', () => {
  let component: LandngPageJobsInformationComponent;
  let fixture: ComponentFixture<LandngPageJobsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandngPageJobsInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandngPageJobsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
