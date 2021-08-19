import { Component, Input, OnInit } from '@angular/core';
import { DataTable } from '../../../models/DataTable';

@Component({
  selector: 'app-test-configrations-edit-new',
  templateUrl: './test-configrations-edit-new.component.html',
  styleUrls: ['./test-configrations-edit-new.component.scss']
})
export class TestConfigrationsEditNewComponent implements OnInit {
public title:string[]=["aa","s"];
public row:any[][]=[][3];
public name: string;
dataTable: DataTable = new DataTable();

  constructor() { }

  ngOnInit(): void {
    this.name="save";
    this.dataTable.titles=this.title;
    this.dataTable.rows=this.row;
    // this.table.row=this.row;
  }

}
