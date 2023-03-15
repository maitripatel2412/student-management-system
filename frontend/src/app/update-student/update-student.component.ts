import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{

  constructor(private activeRouter: ActivatedRoute,private studentService: StudentServiceService,
    private router:Router){ }

  sid!: number;
  student:Student=new Student();

  ngOnInit(): void {
    this.sid=this.activeRouter.snapshot.params['sid'];
    console.log(this.sid);
    this.studentService.getStudentById(this.sid).subscribe(data=>{
      this.student=data;
      console.log(this.student);
    })
  }

  updateStudentData(){
    console.log("updating data ", this.student);
    this.studentService.updateStudentData(this.student).subscribe(data=>{
      alert("updated successfully");
      this.router.navigate(['/students'])
    })
  }


}
