import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { SharedTableComponent } from './components/shared-table/shared-table.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    SharedTableComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports :
  [
    SharedTableComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
