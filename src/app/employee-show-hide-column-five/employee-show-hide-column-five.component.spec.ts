import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeShowHideColumnFiveComponent } from './employee-show-hide-column-five.component';

describe('EmployeeShowHideColumnFiveComponent', () => {
  let component: EmployeeShowHideColumnFiveComponent;
  let fixture: ComponentFixture<EmployeeShowHideColumnFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeShowHideColumnFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeShowHideColumnFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
