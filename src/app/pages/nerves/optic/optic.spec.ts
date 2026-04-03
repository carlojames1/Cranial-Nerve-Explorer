import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Optic } from './optic';

describe('Optic', () => {
  let component: Optic;
  let fixture: ComponentFixture<Optic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Optic],
    }).compileComponents();

    fixture = TestBed.createComponent(Optic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
