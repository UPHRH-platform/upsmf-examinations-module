import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { SharedTableComponent } from './components/shared-table/shared-table.component';

@NgModule({
  declarations: [
    SharedTableComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports :
  [
    SharedTableComponent
  ]
})
export class SharedModule { }
