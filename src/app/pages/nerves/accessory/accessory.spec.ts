import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessory } from './accessory';

describe('Accessory', () => {
  let component: Accessory;
  let fixture: ComponentFixture<Accessory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accessory],
    }).compileComponents();

    fixture = TestBed.createComponent(Accessory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
