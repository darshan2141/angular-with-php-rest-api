import { getLocaleFirstDayOfWeek } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  addFrom: any;
  id: any;
  isDisable = true;
  reLoad = false;

  constructor(
    private fromBuilder: FormBuilder,
    private service: StudentsService
  ) {}

  ngOnInit() {
    this.addFrom = this.fromBuilder.group({
      // sId: [],
      name: ['', Validators.required],
      // lName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  onSubmit() {
    // console.log(this.addFrom.value );
    this.service.addStudents(this.addFrom.value).subscribe((res: any) => {
      console.log(res);
      
      // this.reLoad = true;
    });
  }

  receiveId(e: any) {
    this.isDisable = false;
    this.id = e;

    this.service.searchStudents(this.id).subscribe((res: any) => {
      this.addFrom.setValue({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
      });

      // this.addFrom.controls['name'].setValue(res.data.name);
      // this.addFrom.controls['email'].setValue(res.data.email);
      // this.addFrom.controls['phone'].setValue(res.data.phone);
      // this.addFrom.get('name').setValue(res.data.name);
      // this.addFrom.get('email').setValue(res.data.email);
      // this.addFrom.get('phone').setValue(res.data.phone);
    });
  }

  updateNew() {
    this.service
      .updateStudents(this.id, this.addFrom.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
  cancel() {
    this.id = null;
    this.addFrom.setValue({
      name: '',
      email: '',
      phone: '',
    });
    this.isDisable = true;
  }
}
