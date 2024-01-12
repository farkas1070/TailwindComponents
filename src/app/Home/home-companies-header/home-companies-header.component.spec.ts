import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompaniesHeaderComponent } from './home-companies-header.component';

describe('HomeCompaniesHeaderComponent', () => {
  let component: HomeCompaniesHeaderComponent;
  let fixture: ComponentFixture<HomeCompaniesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCompaniesHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCompaniesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
