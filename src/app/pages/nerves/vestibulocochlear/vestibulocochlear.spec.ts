import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vestibulocochlear } from './vestibulocochlear';

describe('Vestibulocochlear', () => {
  let component: Vestibulocochlear;
  let fixture: ComponentFixture<Vestibulocochlear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vestibulocochlear],
    }).compileComponents();

    fixture = TestBed.createComponent(Vestibulocochlear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
