import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResultsComponent } from './home-results.component';

describe('HomeResultsComponent', () => {
  let component: HomeResultsComponent;
  let fixture: ComponentFixture<HomeResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
