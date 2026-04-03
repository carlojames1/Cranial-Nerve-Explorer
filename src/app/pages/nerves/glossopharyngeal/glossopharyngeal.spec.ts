import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glossopharyngeal } from './glossopharyngeal';

describe('Glossopharyngeal', () => {
  let component: Glossopharyngeal;
  let fixture: ComponentFixture<Glossopharyngeal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Glossopharyngeal],
    }).compileComponents();

    fixture = TestBed.createComponent(Glossopharyngeal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
