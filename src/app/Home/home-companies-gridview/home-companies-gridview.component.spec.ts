import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompaniesGridviewComponent } from './home-companies-gridview.component';

describe('HomeCompaniesGridviewComponent', () => {
  let component: HomeCompaniesGridviewComponent;
  let fixture: ComponentFixture<HomeCompaniesGridviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCompaniesGridviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCompaniesGridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
