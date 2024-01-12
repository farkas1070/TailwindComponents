import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompaniesGridCardComponent } from './home-companies-grid-card.component';

describe('HomeCompaniesGridCardComponent', () => {
  let component: HomeCompaniesGridCardComponent;
  let fixture: ComponentFixture<HomeCompaniesGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCompaniesGridCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCompaniesGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
