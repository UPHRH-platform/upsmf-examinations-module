import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageExamsModuleRoutingModule } from './manage-exams-module-routing.module';
import { ExamsTableComponent } from './components/exams-table/exams-table.component';
import { SharedModule } from '../shared/shared.module';
import { ExamCycleComponent } from './components/exam-cycle/exam-cycle.component';
import { MaterialModule } from 'src/material/material.module';
import { MatTimepickerModule } from 'mat-timepicker';
import { ReactiveFormsModule } from '@angular/forms';




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
   MatTimepickerModule,
   ReactiveFormsModule
  ],
  exports:[
    ExamsTableComponent
  ]
})
export class ManageExamsModuleModule { }
