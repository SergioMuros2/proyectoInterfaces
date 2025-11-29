import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenodexFrame } from './nenodex-frame';

describe('NenodexFrame', () => {
  let component: NenodexFrame;
  let fixture: ComponentFixture<NenodexFrame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NenodexFrame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NenodexFrame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
