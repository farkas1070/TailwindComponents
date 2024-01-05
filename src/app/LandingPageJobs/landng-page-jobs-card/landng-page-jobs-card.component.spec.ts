import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandngPageJobsCardComponent } from './landng-page-jobs-card.component';

describe('LandngPageJobsCardComponent', () => {
  let component: LandngPageJobsCardComponent;
  let fixture: ComponentFixture<LandngPageJobsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandngPageJobsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandngPageJobsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
