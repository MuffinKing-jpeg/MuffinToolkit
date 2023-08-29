import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknamerComponent } from './nicknamer.component';

describe('NicknamerComponent', () => {
  let component: NicknamerComponent;
  let fixture: ComponentFixture<NicknamerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NicknamerComponent]
    });
    fixture = TestBed.createComponent(NicknamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
