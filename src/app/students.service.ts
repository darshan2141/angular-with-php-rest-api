import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './students';
import { __param } from 'tslib';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  // baseUrl: string = 'http://localhost/phprestAPI/';
  // baseUrl: string = 'http://localhost/try2/';

  getStudents() {
    // return this.http.get<Students[]>(this.baseUrl + 'view.php');
    // return this.http.get<Students[]>(this.baseUrl + 'display.php');
    return this.http.get('http://localhost/phpapi/read.php');
  }

  addStudents(data: any) {
    return this.http.post('http://localhost/phpapi/create.php', data);
  }

  searchStudents(id: any) {
    return this.http.get(`http://localhost/phpapi/read.php?id=${id}`);
  }

  updateStudents(id: any, data: any): Observable<any> {
    return this.http.put(`http://localhost/phpapi/update.php?id=${id}`, data);
  }
  
  deleteStudents(id:any){
    return this.http.delete(`http://localhost/phpapi/delete.php?id=${id}`);
  }
}
