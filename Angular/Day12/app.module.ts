import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StringinterpolarionComponent } from './stringinterpolarion/stringinterpolarion.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { Eventbinding3Component } from './eventbinding3/eventbinding3.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { InbildpipeComponent } from './inbildpipe/inbildpipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { Summarypipe } from './utility/summary.pipe';
import { Summary1Pipe } from './summary1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    StringinterpolarionComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    Eventbinding1Component,
    Eventbinding2Component,
    Eventbinding3Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    InbildpipeComponent,
    CustompipeComponent,
    Summarypipe,
    Summary1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
