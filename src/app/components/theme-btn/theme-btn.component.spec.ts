import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBtnComponent } from './theme-btn.component';

describe('ThemeBtnComponent', () => {
  let component: ThemeBtnComponent;
  let fixture: ComponentFixture<ThemeBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeBtnComponent]
    });
    fixture = TestBed.createComponent(ThemeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
