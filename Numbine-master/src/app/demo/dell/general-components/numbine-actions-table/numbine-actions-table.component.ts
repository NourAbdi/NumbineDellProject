import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTable } from '../../models/DataTable';

@Component({
  selector: 'app-numbine-actions-table',
  templateUrl: './numbine-actions-table.component.html',
  styleUrls: ['./numbine-actions-table.component.scss']
})
export class NumbineActionsTableComponent implements OnInit {
  @Input()
  dataTable: DataTable = new DataTable();

  @Input()
  trashBool: Boolean = true;
  @Input()
  trashClick: Function;
  @Input()
  editBool: Boolean = true;
  @Input()
  editClick: Function;

  constructor() {

  }

  ngOnInit(): void {
  }
}
