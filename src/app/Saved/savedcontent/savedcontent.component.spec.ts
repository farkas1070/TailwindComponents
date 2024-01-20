import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedcontentComponent } from './savedcontent.component';

describe('SavedcontentComponent', () => {
  let component: SavedcontentComponent;
  let fixture: ComponentFixture<SavedcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
