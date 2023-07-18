import { Component } from '@angular/core';

import {msgs} from "../../../../../locale/en";

@Component({
  selector: 'app-exams-table',
  templateUrl: './exams-table.component.html',
  styleUrls: ['./exams-table.component.scss']
})
export class ExamsTableComponent {

  msgs = msgs;

ngOnInit() {
  console.log(this.msgs.manageExamsText);
}
}
