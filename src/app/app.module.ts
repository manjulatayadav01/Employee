import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeSearchNameGenderThreeComponent } from './employee-search-name-gender-three/employee-search-name-gender-three.component';
import { MultiSearchFilterPipe } from './multi-search-filter.pipe';
import { EmployeeGenderConditionalFourComponent } from './employee-gender-conditional-four/employee-gender-conditional-four.component';
import { EmployeeShowHideColumnFiveComponent } from './employee-show-hide-column-five/employee-show-hide-column-five.component';
import { EmployeeMaskSalarySixComponent } from './employee-mask-salary-six/employee-mask-salary-six.component';
import { MaskHashPipe } from './mask-hash.pipe';
import { NameSearchPipe } from './name-search.pipe';
import { GenderSearchPipe } from './gender-search.pipe';
import { EmployeeSearchTwoComponent } from './employee-search-two/employee-search-two.component';
import { EmployeeSortOneComponent } from './employee-sort-one/employee-sort-one.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSearchNameGenderThreeComponent,
    MultiSearchFilterPipe,
    EmployeeGenderConditionalFourComponent,
    EmployeeShowHideColumnFiveComponent,
    EmployeeMaskSalarySixComponent,
    MaskHashPipe,
    NameSearchPipe,
    GenderSearchPipe,
    EmployeeSearchTwoComponent,
    EmployeeSortOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
