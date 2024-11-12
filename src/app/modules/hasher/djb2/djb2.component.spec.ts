import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Djb2Component } from './djb2.component';

describe('Djb2Component', () => {
  let component: Djb2Component;
  let fixture: ComponentFixture<Djb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Djb2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Djb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
