import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStatsComponent } from './services-stats.component';

describe('ServicesStatsComponent', () => {
  let component: ServicesStatsComponent;
  let fixture: ComponentFixture<ServicesStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
