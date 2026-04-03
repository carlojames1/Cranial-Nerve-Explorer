import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abducens } from './abducens';

describe('Abducens', () => {
  let component: Abducens;
  let fixture: ComponentFixture<Abducens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abducens],
    }).compileComponents();

    fixture = TestBed.createComponent(Abducens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
