import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMaskSalarySixComponent } from './employee-mask-salary-six.component';

describe('EmployeeMaskSalarySixComponent', () => {
  let component: EmployeeMaskSalarySixComponent;
  let fixture: ComponentFixture<EmployeeMaskSalarySixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMaskSalarySixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMaskSalarySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
