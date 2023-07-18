import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
export interface TableProps {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

export interface TableProps1 {
  firstColumnData?: string;
  secondColumnData?: string;
  thirdColumnData?: string;
  fourthColumnData?: string;
  fifthColumnData?: number;
  sixthColumnData?: number;
  seventhColumnData?: string;
  eighthColumnData?: string;
  ninthColumnData?: string;
  tenthColumnData?: number;
}

/* interface Column {
  field: string;
  header: string;
} */

export interface Column {
  columnDef: string;
  header: string;
  cell: Function;
  isLink?: boolean;
  url?: string;
}

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss']
})
export class SharedTableComponent implements AfterViewInit {
  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  value!: TableProps[];

  cols!: Column[];

  tableColumns: Array<Column> = [
    {
      columnDef: 'position',
      header: 'Exam cycle',
      cell: (element: Record<string, any>) => `${element['position']}`
    },
    {
      columnDef: 'name',
      header: 'Course Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
      isLink: true,
      url: 'abc'
    },
    {
      columnDef: 'weight',
      header: 'Start date',
      cell: (element: Record<string, any>) => `${element['weight']}`
    },
    {
      columnDef: 'symbol',
      header: 'End date',
      cell: (element: Record<string, any>) => `${element['symbol']}`
    }
  ];

  anotherTableColumns: Array<Column> = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`
    },
    {
      columnDef: 'role',
      header: 'Role',
      cell: (element: Record<string, any>) => `${element['role']}`
    },
    {
      columnDef: 'skills',
      header: 'Skills',
      cell: (element: Record<string, any>) => `${element['skills']}`
    }
  ];

  anotherTableData: Array<any> = [
    {
      name: 'John',
      role: 'Fullstack Developer',
      skills: 'Angular, Typescript, React'
    },
    { name: 'Mile', role: 'Java Developer', skills: 'Java' },
    { name: 'Peter', role: 'DevOps', skills: 'AWS, GCP' }
  ];


  tableData: Array<any> =  [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
  ];;

  
  displayedColumns: Array<string> = [];
  dataSource: MatTableDataSource<[any]> = new MatTableDataSource();
  //dataSource = new MatTableDataSource([])
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   
  }
  announceSortChange(sortState: Sort) {
    console.log(sortState)
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  ngOnInit() {

    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
   
   
/*     this.value = [{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }, {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },] */

/*     this.cols = [
      { field: 'code', header: 'Exam Cycle' },
      { field: 'name', header: 'Course Name' },
      { field: 'category', header: 'Start Date' },
      { field: 'quantity', header: 'End Date' },
      { field: '', header: '' }
    ];
 */
    };

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      console.log(this.dataSource.filter);
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
