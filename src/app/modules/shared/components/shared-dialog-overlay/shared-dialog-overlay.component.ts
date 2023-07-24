import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { TableColumn } from '../../../shared/components/shared-table/shared-table.component';
import { Exams } from '../../../manage-exams-module/components/exams-table/exams-table.component';
export interface DialogData {
  examsTableColumns: [];
  exams: [];
}

@Component({
  selector: 'app-shared-dialog-overlay',
  templateUrl: './shared-dialog-overlay.component.html',
  styleUrls: ['./shared-dialog-overlay.component.scss']
})
export class SharedDialogOverlayComponent {
  exams: Exams[];
  examsTableColumns: TableColumn[];
  constructor(
    public dialogRef: MatDialogRef<SharedDialogOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
    this.exams = this.data.exams;
    console.log(this.exams)
    this.examsTableColumns =this.data.examsTableColumns;
    console.log(this.examsTableColumns)
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
