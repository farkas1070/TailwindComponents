import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecheckboxComponent } from './homecheckbox.component';

describe('HomecheckboxComponent', () => {
  let component: HomecheckboxComponent;
  let fixture: ComponentFixture<HomecheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
