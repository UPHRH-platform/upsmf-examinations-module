import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamsTableComponent } from './components/exams-table/exams-table.component';
import { ExamCycleComponent } from './components/exam-cycle/exam-cycle.component';

const routes: Routes = [

  {
    path: 'manage-exams', component: ExamsTableComponent, pathMatch: 'full',
  },
  {
    path: 'exam-cycle', component: ExamCycleComponent, pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageExamsModuleRoutingModule { }
