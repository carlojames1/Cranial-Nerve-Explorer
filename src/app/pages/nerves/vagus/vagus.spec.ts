import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vagus } from './vagus';

describe('Vagus', () => {
  let component: Vagus;
  let fixture: ComponentFixture<Vagus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vagus],
    }).compileComponents();

    fixture = TestBed.createComponent(Vagus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
