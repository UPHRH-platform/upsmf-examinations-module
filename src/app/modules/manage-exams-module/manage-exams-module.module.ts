import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageExamsModuleRoutingModule } from './manage-exams-module-routing.module';
import { ExamsTableComponent } from './components/exams-table/exams-table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ExamsTableComponent
  ],
  imports: [
    CommonModule,
    ManageExamsModuleRoutingModule,
    SharedModule
    
  ]
})
export class ManageExamsModuleModule { }
