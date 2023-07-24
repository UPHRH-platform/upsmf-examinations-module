import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  exams: Exams[] = [];
  examsTableColumns: TableColumn[] = [];
  tableDataReady: boolean = false;


  csvContent: any;
  convertedArray: Array<any> = [];
  properties: any = '';


  constructor(
    public dialogRef: MatDialogRef<SharedDialogOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
    /*   this.exams = this.data.exams;
      console.log(this.exams)
      this.examsTableColumns =this.data.examsTableColumns;
      console.log(this.examsTableColumns)  */
  }

  onFileSelect(input:any) {
    const files = input.files;
    var fileTypes = ['csv']; //acceptable file types

    if (files && files.length) {
      var extension = input.files[0].name.split('.').pop().toLowerCase(), //file extension from input file
        //Validating type of File Uploaded
        isSuccess = fileTypes.indexOf(extension) > -1; //is extension in acceptable types
      var that = this;
      //Flag to check the Validation Result
      if (isSuccess) {
        const fileToRead = files[0];

        const fileReader = new FileReader();

        fileReader.onload = (fileLoadedEvent) => {
          const textFromFileLoaded = fileLoadedEvent?.target?.result;
          that.csvContent = textFromFileLoaded;

          //Flag is for extracting first line
          let flag = false;
          // Main Data
          let objarray: Array<any> = [];
          //Properties
          let prop: Array<any> = [];
          //Total Length
          let size: any = 0;

          for (const line of that.csvContent.split(/[\r\n]+/)) {
            if (flag) {
              let obj: any = {};
              for (let k = 0; k < size; k++) {
                //Dynamic Object Properties
                obj[prop[k]] = line.split(',')[k];
              }
              objarray.push(obj);
            } else {
              //First Line of CSV will be having Properties
              for (let k = 0; k < line.split(',').length; k++) {
                size = line.split(',').length;
                //Removing all the spaces to make them usefull
                prop.push(line.split(',')[k].replace(/ /g, ''));
              }
              flag = true;
            }
          }
          //All the values converted from CSV to JSON Array
          that.convertedArray = objarray;
          that.properties = [];
          //Object Keys of Converted JSON Array
          that.properties = prop;


          this.examsTableColumns =  [
            {
              columnDef:  that.properties[0],
              header: 'Exam Cycle',
              isSortable: true,
              cell: (element: Record<string, any>) => `${element[that.properties[0]]}`
            },
            {
              columnDef:that.properties[1],
              header: 'Course Name',
              isSortable: true,
              cell: (element: Record<string, any>) => `${element[that.properties[1]]}`
            },
            {
              columnDef: that.properties[2],
              header: 'Start Date',
              isSortable: true,
              cell: (element: Record<string, any>) => `${element[that.properties[2]]}`
            },
            {
              columnDef: that.properties[3],
              header: 'End Date',
              isSortable: true,
              cell: (element: Record<string, any>) => `${element[that.properties[3]]}`
            },
          ];

          this.exams = that.convertedArray
        
          this.tableDataReady = true;
        };

        fileReader.readAsText(fileToRead, 'UTF-8');
      } else {
        //On Error
        console.error('Invalid File Format!');
      }
    }
  }



        


  initializeColumns() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
