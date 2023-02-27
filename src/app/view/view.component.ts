import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { StudentsService } from '../students.service';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  students: any;
  isList = true;
  // @Input() data: any;

  @Output() event = new EventEmitter<string>();

  constructor(private studetSrv: StudentsService, private router: Router) {}

  ngOnInit() {

    this.studetSrv.getStudents().subscribe(
      (res: any) => {
        this.students = res.data;
        // console.log(Array.isArray(this.students));
      }
    );
  }

  deleteStudent(id: any) {
    this.studetSrv.deleteStudents(id).subscribe((res: any) => {
      console.log(res.status);
    });
  }

  search(e: any) {
    if (!e.target.value) {
      this.studetSrv.getStudents().subscribe((res: any) => {
        this.isList = true;
        this.students = res.data;
      });
    } else {
      this.isList = false;
      this.studetSrv.searchStudents(e.target.value).subscribe((res: any) => {
        this.students = res.data;
      });
    }
  }

  update(id: any) {
    // sessionStorage.setItem('id', id);
    this.event.emit(id);
  }


  ngOnChanges(){
    // console.log(this.data);
    
  }
}
