import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNenomon } from './add-nenomon';

describe('AddNenomon', () => {
  let component: AddNenomon;
  let fixture: ComponentFixture<AddNenomon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNenomon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNenomon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
