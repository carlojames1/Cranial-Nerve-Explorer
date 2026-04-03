import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olfactory } from './olfactory';

describe('Olfactory', () => {
  let component: Olfactory;
  let fixture: ComponentFixture<Olfactory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Olfactory],
    }).compileComponents();

    fixture = TestBed.createComponent(Olfactory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
