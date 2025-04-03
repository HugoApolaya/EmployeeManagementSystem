import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-table',
  imports: [MatTableModule, MatCardModule, MatButtonModule],  
  templateUrl: './table.component.html'
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() displayedColumns: any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  edit(rowData:any){

    //console.log(rowData);
    this.onEdit.emit(rowData);

  }

  
  delete(rowData:any){

    //console.log(rowData);
    this.onDelete.emit(rowData);

  }
}
