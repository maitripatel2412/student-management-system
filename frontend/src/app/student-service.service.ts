import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  
  

   baseURL="http://localhost:8081/student";

  constructor(private HttpClient: HttpClient) { }

  addStudent(student:Student):Observable<Object>{
    console.log("student data in srvic :: ", student);
    return this.HttpClient.post(`${this.baseURL}`,student);
  }

  getAllStudent():Observable<Student[]>{
    return this.HttpClient.get<Student[]>(`${this.baseURL}`)
  }

  getStudentById(sid: number):Observable<Student> {
    console.log(sid)
      return this.HttpClient.get<Student>(`${this.baseURL}/${sid}`);
  }

  updateStudentData(student: Student):Observable<Object> {
    console.log("student updat in srvic :: ", student);
    return this.HttpClient.post(`${this.baseURL}`,student);
  }

  DeleteStudent(sid:number){
    console.log("student dlt srvic :: ", sid);
     return this.HttpClient.delete(`${this.baseURL}/${sid}`)
  }

}
