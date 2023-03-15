import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [

     {path:'students',component : StudentListComponent},
     {path:'addstudent',component : CreateStudentComponent},
     {path:'update-student/:sid',component : UpdateStudentComponent},
     {path:'',component : StudentListComponent},
     {path:'delete-student/:sid', component : DeleteStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
