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
    return this.http.get('http://phpcrud.darshan2141.epizy.com/read.php');
  }

  addStudents(data: any) {
    return this.http.post('http://phpcrud.darshan2141.epizy.com/add.php', data);
  }

  searchStudents(id: any) {
    return this.http.get(
      `http://phpcrud.darshan2141.epizy.com/read.php?id=${id}`
    );
  }

  updateStudents(id: any, data: any): Observable<any> {
    return this.http.put(
      `http://phpcrud.darshan2141.epizy.com/update.php?id=${id}`,
      data
    );
  }

  deleteStudents(id: any) {
    return this.http.delete(
      `http://phpcrud.darshan2141.epizy.com/delete.php?id=${id}`
    );
  }
}
