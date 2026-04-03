import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hypoglossal } from './hypoglossal';

describe('Hypoglossal', () => {
  let component: Hypoglossal;
  let fixture: ComponentFixture<Hypoglossal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hypoglossal],
    }).compileComponents();

    fixture = TestBed.createComponent(Hypoglossal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
