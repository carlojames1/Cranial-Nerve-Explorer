import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trochlear } from './trochlear';

describe('Trochlear', () => {
  let component: Trochlear;
  let fixture: ComponentFixture<Trochlear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trochlear],
    }).compileComponents();

    fixture = TestBed.createComponent(Trochlear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
