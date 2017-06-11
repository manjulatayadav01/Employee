import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSortOneComponent } from './employee-sort-one.component';

describe('EmployeeSortOneComponent', () => {
  let component: EmployeeSortOneComponent;
  let fixture: ComponentFixture<EmployeeSortOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSortOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSortOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
