import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNenomon } from './delete-nenomon';

describe('DeleteNenomon', () => {
  let component: DeleteNenomon;
  let fixture: ComponentFixture<DeleteNenomon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteNenomon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteNenomon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
