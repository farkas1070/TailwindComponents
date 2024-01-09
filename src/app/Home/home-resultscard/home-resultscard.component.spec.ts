import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResultscardComponent } from './home-resultscard.component';

describe('HomeResultscardComponent', () => {
  let component: HomeResultscardComponent;
  let fixture: ComponentFixture<HomeResultscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeResultscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeResultscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
