import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NervePictures } from './nerve-pictures';

describe('NervePictures', () => {
  let component: NervePictures;
  let fixture: ComponentFixture<NervePictures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NervePictures],
    }).compileComponents();

    fixture = TestBed.createComponent(NervePictures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
