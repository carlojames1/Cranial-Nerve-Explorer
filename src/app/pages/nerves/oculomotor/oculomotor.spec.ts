import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oculomotor } from './oculomotor';

describe('Oculomotor', () => {
  let component: Oculomotor;
  let fixture: ComponentFixture<Oculomotor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oculomotor],
    }).compileComponents();

    fixture = TestBed.createComponent(Oculomotor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
