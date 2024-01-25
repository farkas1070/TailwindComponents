import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintoastComponent } from './logintoast.component';

describe('LogintoastComponent', () => {
  let component: LogintoastComponent;
  let fixture: ComponentFixture<LogintoastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogintoastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogintoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
