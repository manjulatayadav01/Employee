import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSearchTwoComponent } from './employee-search-two.component';

describe('EmployeeSearchTwoComponent', () => {
  let component: EmployeeSearchTwoComponent;
  let fixture: ComponentFixture<EmployeeSearchTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSearchTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSearchTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
