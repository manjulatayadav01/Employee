import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGenderConditionalFourComponent } from './employee-gender-conditional-four.component';

describe('EmployeeGenderConditionalFourComponent', () => {
  let component: EmployeeGenderConditionalFourComponent;
  let fixture: ComponentFixture<EmployeeGenderConditionalFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeGenderConditionalFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGenderConditionalFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
