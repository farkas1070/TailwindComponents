import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesctaComponent } from './servicescta.component';

describe('ServicesctaComponent', () => {
  let component: ServicesctaComponent;
  let fixture: ComponentFixture<ServicesctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesctaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
