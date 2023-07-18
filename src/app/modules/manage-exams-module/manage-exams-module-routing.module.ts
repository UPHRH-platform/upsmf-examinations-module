import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamsTableComponent } from './components/exams-table/exams-table.component';
import { HeaderComponent } from '../shared/components/header/header.component';

const routes: Routes = [

  {
    path: 'manage-exams', component: ExamsTableComponent, pathMatch: 'full',
  },
  {
    path: 'header', component: HeaderComponent, pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageExamsModuleRoutingModule { }
