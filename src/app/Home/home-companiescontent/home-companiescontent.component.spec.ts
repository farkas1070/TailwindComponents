import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompaniescontentComponent } from './home-companiescontent.component';

describe('HomeCompaniescontentComponent', () => {
  let component: HomeCompaniescontentComponent;
  let fixture: ComponentFixture<HomeCompaniescontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCompaniescontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCompaniescontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
