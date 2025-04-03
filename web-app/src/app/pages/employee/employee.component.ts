import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { TableComponent } from '../../components/table/table.component';
import { IEmployee } from '../../types/employee';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
@Component({
  selector: 'app-employee',
  imports: [TableComponent, MatButtonModule, MatDialogModule
  ],
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {
  httpService = inject(HttpService);
  employeeList: IEmployee[] = [];
  showCols = ['id', 'name', 'email', 'phone', 'action'];
  isFormOpen = false;
  ngOnInit() {
    this.getLatesDate();
  }

  getLatesDate() {

    this.httpService.getEmployeeList().subscribe((result) => {
      //console.log(result);
      this.employeeList = result;
    }
    );
  }
  edit(employee: IEmployee) {
    console.log(employee);
    let ref = this.dialog.open(EmployeeFormComponent, {
      panelClass: 'm-auto',
      data:{
        employeeId:employee.id,
      },
    });
    ref.afterClosed().subscribe(result => {
      this.getLatesDate();
    });
  }

  delete(employee: IEmployee) {
    console.log(employee);

    this.httpService.deleteEmployee(employee.id).subscribe(()=>{

      alert("Record Deleted.")
      this.getLatesDate();
    });

  }

  add() {
    this.openDialog();
  }

  readonly dialog = inject(MatDialog);
  openDialog(): void {
    let ref = this.dialog.open(EmployeeFormComponent, {
      panelClass: 'm-auto'
    });
    ref.afterClosed().subscribe(result => {
      this.getLatesDate();
    });

  }

}
