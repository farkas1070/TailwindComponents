import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandngPageJobsComponent } from './landng-page-jobs.component';

describe('LandngPageJobsComponent', () => {
  let component: LandngPageJobsComponent;
  let fixture: ComponentFixture<LandngPageJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandngPageJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandngPageJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
