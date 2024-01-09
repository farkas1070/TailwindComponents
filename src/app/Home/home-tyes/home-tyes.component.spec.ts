import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTyesComponent } from './home-tyes.component';

describe('HomeTyesComponent', () => {
  let component: HomeTyesComponent;
  let fixture: ComponentFixture<HomeTyesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTyesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
