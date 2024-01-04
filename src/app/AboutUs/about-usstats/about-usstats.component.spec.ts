import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUSStatsComponent } from './about-usstats.component';

describe('AboutUSStatsComponent', () => {
  let component: AboutUSStatsComponent;
  let fixture: ComponentFixture<AboutUSStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUSStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUSStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
