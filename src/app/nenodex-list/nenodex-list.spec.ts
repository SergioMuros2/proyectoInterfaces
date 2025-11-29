import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenodexList } from './nenodex-list';

describe('NenodexList', () => {
  let component: NenodexList;
  let fixture: ComponentFixture<NenodexList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NenodexList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NenodexList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
