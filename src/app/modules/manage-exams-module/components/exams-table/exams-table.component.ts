import { Component, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { msgs } from "../../../../../locale/en";
import { TableColumn } from '../../../shared/components/shared-table/shared-table.component';
import { SharedDialogOverlayComponent } from '../../../shared/components/shared-dialog-overlay/shared-dialog-overlay.component';

export interface Exams {
  examId: string;
  description: string;
  startDate: string;
  endDate: string;
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
  examsTableColumns: TableColumn[];
  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    this.initializeColumns();
    console.log(this.examsTableColumns)
    this.getExams();
    console.log(this.exams)
  }

  initializeColumns(): void {
    this.examsTableColumns = [
      {
        columnDef: 'examId',
        header: 'Exam Cycle',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['examId']}`
      },
      {
        columnDef: 'description',
        header: 'Course Name',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['description']}`
      },
      {
        columnDef: 'startDate',
        header: 'Start Date',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['startDate']}`
      },
      {
        columnDef: 'endDate',
        header: 'End Date',
        isSortable: true,
        cell: (element: Record<string, any>) => `${element['endDate']}`
      },
      {
        columnDef: 'schedule',
        header: '',
        isSortable: false,
        cell: (element: Record<string, any>) => `View Schedule`
      },
      {
        columnDef: 'isActive',
        header: '',
        isSortable: false,
        isAction: true,
        cell: (element: Record<string, any>) => `${element['isActive']}`
      }

    ];
  }

  getExams() {
    this.exams = [
      {
        examId: "M SC ( NURSING ) - SEMESTER 1",
        description: 'M SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      },
      {
        examId: "M SC ( NURSING ) - SEMESTER 1",
        description: 'M SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      },
      {
        examId: "M SC ( NURSING ) - SEMESTER 1",
        description: 'M SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      },
      {
        examId: "M SC ( NURSING ) - SEMESTER 2",
        description: 'M SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      },
      {
        examId: "M SC ( NURSING ) - SEMESTER 2",
        description: 'M SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      }, {
        examId: "M SC ( NURSING ) - SEMESTER 2",
        description: 'M SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      },
      {
        examId: "B SC ( NURSING ) - SEMESTER 1",
        description: 'B SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      },
      {
        examId: "B SC ( NURSING ) - SEMESTER 2",
        description: 'B SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      },
      {
        examId: "B SC ( NURSING ) - SEMESTER 1",
        description: 'B SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      },
      {
        examId: "B SC ( NURSING ) - SEMESTER 2",
        description: 'B SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      },
      {
        examId: "B SC ( NURSING ) - SEMESTER 2",
        description: 'B SC ( NURSING )',
        startDate: "23-06-2023",
        endDate: "23-12-2023",
        isActive: true
      }
    ];
  }

  removeItem(e: Event) {
    console.log(e)
  }


  openBulkUploadDialog(): void {
    const dialogRef = this.dialog.open(SharedDialogOverlayComponent, {
      data: {
        exams: this.exams,
        examsTableColumns: this.examsTableColumns
      },
      maxWidth: '800vw',
      maxHeight: '100vh',
      height: '80%',
      width: '80%',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
}


}