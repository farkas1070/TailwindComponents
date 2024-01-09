import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResultscontentComponent } from './home-resultscontent.component';

describe('HomeResultscontentComponent', () => {
  let component: HomeResultscontentComponent;
  let fixture: ComponentFixture<HomeResultscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeResultscontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeResultscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
