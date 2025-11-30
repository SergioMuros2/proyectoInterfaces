import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenomonDetails } from './nenomon-details';

describe('NenomonDetails', () => {
  let component: NenomonDetails;
  let fixture: ComponentFixture<NenomonDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NenomonDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NenomonDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
