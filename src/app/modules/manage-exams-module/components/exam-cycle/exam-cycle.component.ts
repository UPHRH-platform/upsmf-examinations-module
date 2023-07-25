import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, inject} from '@angular/core';
import { FormGroup ,AbstractControl, FormControl} from '@angular/forms';




export interface Exam {
  examname: string;
  examdate:string;
  starttime:string;
  endtime:string
}


@Component({
  selector: 'app-exam-cycle',
  templateUrl: './exam-cycle.component.html',
  styleUrls: ['./exam-cycle.component.scss']
})
export class ExamCycleComponent implements OnInit{
  pickerMinDate = new Date(new Date().setHours(0, 0, 0, 0));
 createExamCycle:FormGroup;

 
 ngOnInit(){
  this.initForm();
}

initForm(){
  this.createExamCycle = new FormGroup({
    'examcycle':new FormControl(),
    'coursename':new FormControl(),
    'startdate':new FormControl(),
    'enddate':new FormControl(),
    'examname':new FormControl(),
    'examdate':new FormControl(),
    'starttime':new FormControl(),
    'endtime':new FormControl(),
  });
}


addExamCycle() {
  const examCycleValue = this.createExamCycle.value;
  this.exams.push(examCycleValue);
  this.createExamCycle.reset();
}
 onSubmit(){
  console.log(this.createExamCycle)
}
     

exams: Exam[]=[]
announcer = inject(LiveAnnouncer);

remove(exams:Exam): void{
  const index = this.exams.indexOf(exams);

  if(index >= 0){
    this.exams.splice(index, 1);

    this.announcer.announce('Removed ${exam}');
  }

}
getFormattedTime(timestamp: string): string {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const twelveHourFormat = (hours % 12) || 12;

  return `${twelveHourFormat}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

endTimeValidator() {
  console.log("Working");
  
  const starttime = this.createExamCycle.controls['starttime'].value;
  const endtime = this.createExamCycle.controls['endtime'].value;

  const startTime = new Date(starttime);
  startTime.setHours(starttime.getHours(), starttime.getMinutes());

  const endTime = new Date(endtime);
  endTime.setHours(endtime.getHours(), endtime.getMinutes());
  console.log(endtime.getHours());
  console.log(starttime.getHours());


  if (endTime <= startTime) {
    this.createExamCycle.controls['endtime'].setErrors({ endTimeInvalid: true });
  } else {
    this.createExamCycle.controls['endtime'].setErrors(null);
  }
  
  
}
 
}





 

