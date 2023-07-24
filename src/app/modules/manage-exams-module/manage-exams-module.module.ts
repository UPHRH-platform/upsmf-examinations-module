import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageExamsModuleRoutingModule } from './manage-exams-module-routing.module';
import { ExamsTableComponent } from './components/exams-table/exams-table.component';
import { SharedModule } from '../shared/shared.module';
import { ExamCycleComponent } from './components/exam-cycle/exam-cycle.component';
import { MaterialModule } from 'src/material/material.module';
//import { MatTimepickerModule } from 'mat-timepicker';




@NgModule({
  declarations: [
    ExamsTableComponent,
    ExamCycleComponent
  ],
  imports: [
    CommonModule,
    ManageExamsModuleRoutingModule,
    SharedModule,
    MaterialModule,
   // MatTimepickerModule,
   
    
    
  ]
})
export class ManageExamsModuleModule { }
