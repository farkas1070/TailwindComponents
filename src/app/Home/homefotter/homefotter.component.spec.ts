import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefotterComponent } from './homefotter.component';

describe('HomefotterComponent', () => {
  let component: HomefotterComponent;
  let fixture: ComponentFixture<HomefotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomefotterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomefotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
