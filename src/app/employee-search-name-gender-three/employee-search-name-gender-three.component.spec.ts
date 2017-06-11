import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSearchNameGenderThreeComponent } from './employee-search-name-gender-three.component';

describe('EmployeeSearchNameGenderThreeComponent', () => {
  let component: EmployeeSearchNameGenderThreeComponent;
  let fixture: ComponentFixture<EmployeeSearchNameGenderThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSearchNameGenderThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSearchNameGenderThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
