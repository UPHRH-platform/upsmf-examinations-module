import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamCycleComponent } from './modules/manage-exams-module/components/exam-cycle/exam-cycle.component';
import { ExamsTableComponent } from './modules/manage-exams-module/components/exams-table/exams-table.component';

const routes: Routes = [

  {
    path: '', component: ExamsTableComponent, pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
