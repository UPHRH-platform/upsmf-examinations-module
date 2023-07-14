import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamsTableComponent } from './components/exams-table/exams-table.component';

const routes: Routes = [

  {
    path: 'manage-exams', component: ExamsTableComponent, pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageExamsModuleRoutingModule { }
