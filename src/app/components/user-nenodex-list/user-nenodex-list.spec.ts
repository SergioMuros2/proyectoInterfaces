import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNenodexList } from './user-nenodex-list';

describe('UserNenodexList', () => {
  let component: UserNenodexList;
  let fixture: ComponentFixture<UserNenodexList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserNenodexList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNenodexList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
