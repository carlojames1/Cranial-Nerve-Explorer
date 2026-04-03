import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Disorders } from './disorders';

describe('Disorders', () => {
  let component: Disorders;
  let fixture: ComponentFixture<Disorders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Disorders],
    }).compileComponents();

    fixture = TestBed.createComponent(Disorders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
