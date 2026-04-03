import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trigeminal } from './trigeminal';

describe('Trigeminal', () => {
  let component: Trigeminal;
  let fixture: ComponentFixture<Trigeminal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trigeminal],
    }).compileComponents();

    fixture = TestBed.createComponent(Trigeminal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
