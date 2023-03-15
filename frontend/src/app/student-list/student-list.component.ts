import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  constructor(private studentService: StudentServiceService, private router: Router) { }

  student: Student[] = [];

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData() {
    this.studentService.getAllStudent().subscribe(data => {
      this.student = data;
    })
  }

  updateStudent(sid: number) {
    console.log(sid);
    this.router.navigate(['update-student', sid]);

  }

  deleteStudent(sid: number) {
    console.log("dlt studnt :: ", sid);
    this.studentService.DeleteStudent(sid).subscribe(data => {
      alert("Deleted successfully");
      this.getStudentData();
      this.router.navigate(['/students'])
    });
  }

}
