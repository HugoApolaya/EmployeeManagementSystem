import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { IDepartment } from '../../types/department';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-departments',
  imports: [MatButtonModule, MatSelectModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {

  httpService= inject(HttpService);
  departments:IDepartment[]=[];
  isFormOpen = false;
  ngOnInit(){
    this.getLatestData();
  }

  getLatestData(){
    this.httpService.getDepartments().subscribe((result)=>
      {
        //console.log(result);
        this.departments= result;
  
      }
      );

  }
  deparmentName!:string;
  addDepartment(){
    console.log(this.deparmentName);
    this.httpService.addDepartment(this.deparmentName).subscribe(()=>{
      alert("Records Saved");
      this.isFormOpen = false;
      this.getLatestData();
      
    })
  }
  editId=0;
  editDepartment(department:IDepartment){
    this.deparmentName = department.name;
    this.isFormOpen = true;
    this.editId = department.id;

  }

  updateDepartment(){
    this.httpService.updateDepartment(this.editId, this.deparmentName)
    .subscribe(()=>{
      alert("Records Saved");
      this.isFormOpen = false;
      this.getLatestData();
      this.editId=0;
    })
  }

  deleteDepartment(id:number){
    this.httpService.deleteDepartment(id)
    .subscribe(()=>{
      alert("Records Deleted");
      this.isFormOpen = false;
      this.getLatestData();
    })

  }
}

