import { Component } from '@angular/core';

import {msgs} from "../../../../../locale/en";
import {TableColumn} from '../../../shared/components/shared-table/shared-table.component';

export interface Exams {
  id: number;
  description: string;
  amount: number;
  price: number;
  discount: number;
  isActive?: boolean;
}
@Component({
  selector: 'app-exams-table',
  templateUrl: './exams-table.component.html',
  styleUrls: ['./exams-table.component.scss']
})


export class ExamsTableComponent {

  msgs = msgs;

  exams: Exams[];
  examsTableColumns : TableColumn[];

  ngOnInit(): void {
    this.initializeColumns();
    console.log(this.examsTableColumns)
     this.getExams();
    console.log(this.exams)
  }

  initializeColumns(): void {
    this.examsTableColumns = [
      {
        columnDef: 'id',
        header: 'Exam Cycle',
        isSortable:true,
        cell: (element: Record<string, any>) => `${element['id']}`
      },
      {
        columnDef: 'description',
        header: 'Course Name',
        isSortable:true,
        cell: (element: Record<string, any>) => `${element['description']}`
      },
      {
        columnDef: 'amount',
        header: 'Start Date',
        isSortable:true,
        cell: (element: Record<string, any>) => `${element['amount']}`
      },
      {
        columnDef: 'price',
        header: 'End Date',
        isSortable:true,
        cell: (element: Record<string, any>) => `${element['price']}`
      },
      {
        columnDef: 'discount',
        header: '',
        isSortable:false,
        cell: (element: Record<string, any>) => `View Schedule`
      },
      {
        columnDef: 'isActive',
        header: '',
        isSortable:false,
        isAction:true,
        cell: (element: Record<string, any>) => `${element['isActive']}`
      }

    ];
  }

  getExams() {
    this.exams =  [
      {
        id: 1,
        description: 'first book',
        amount: 100,
        price: 120,
        discount: 20,
        isActive: true
      },
      {
        id: 2,
        description: 'second book',
        amount: 100,
        price: 120,
        discount: 20,
        isActive: true
      },
      {
        id: 3,
        description: 'third book',
        amount: 100,
        price: 120,
        discount: 20,
        isActive: true
      },
      {
        id: 4,
        description: 'fourth book',
        amount: 100,
        price: 120,
        discount: 20,
        isActive: true
      },
      {
        id: 5,
        description: 'fifth book',
        amount: 100,
        price: 120,
        discount: 20,
        isActive: true
      }
    ];
  }

  removeItem(e : Event){
    console.log(e)
  }
}
