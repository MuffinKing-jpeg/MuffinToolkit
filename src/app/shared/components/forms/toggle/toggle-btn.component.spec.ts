import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleBtnComponent } from './toggle-btn.component';

describe('ToggleBtnComponent', () => {
  let component: ToggleBtnComponent;
  let fixture: ComponentFixture<ToggleBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleBtnComponent]
    });
    fixture = TestBed.createComponent(ToggleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
