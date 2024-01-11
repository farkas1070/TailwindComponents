import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebottomctaComponent } from './homebottomcta.component';

describe('HomebottomctaComponent', () => {
  let component: HomebottomctaComponent;
  let fixture: ComponentFixture<HomebottomctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebottomctaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomebottomctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
