import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResultsInfoComponent } from './home-results-info.component';

describe('HomeResultsInfoComponent', () => {
  let component: HomeResultsInfoComponent;
  let fixture: ComponentFixture<HomeResultsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeResultsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeResultsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
