import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { FormsModule } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(private studentService:StudentServiceService,private router:Router) { }

  ngOnInit():void {

  }

  addStudentData(){
    this.studentService.addStudent(this.student).subscribe(data=>{
      alert("Studenyt Data Insert Succssfully");
      this.gotoListOfStudentPage();
    },error=>alert("sorry unable to insert student data"))
  }

gotoListOfStudentPage(){
  this.router.navigate(['/students'])
} 

}
