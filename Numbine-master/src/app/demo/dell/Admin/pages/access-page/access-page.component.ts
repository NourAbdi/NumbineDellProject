import { DataTable } from './../../../models/DataTable';
import { UserService } from '../../../services/UserService/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';

@Component({
  selector: 'app-access-page',
  templateUrl: './access-page.component.html',
  styleUrls: ['./access-page.component.scss']
})
export class AccessPageComponent implements OnInit {

  public users: User[];
  public titles = ['Name', 'Username(Email)', 'Role', 'ProductsGroups'];
  public rows = [];
  public options = ['Admin', 'User', 'Configurator'];
  public dataTable = new DataTable();


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
      this.users.forEach((user) => {
        this.rows.push([user.name, user.email, user.role, "null"]);
      });
      this.dataTable.titles = this.titles;
      this.dataTable.rows = this.rows;
    }, err => {
      alert("Error" + err);
    });
  }

  public getUsersByRole(event): void {
    console.log(event);
    console.log(event.target.value);
    this.userService.getUsersByRole(event.target.value).subscribe(users => {
      this.users = users;
      this.users.forEach((user) => {
        this.rows.push([user.name, user.email, user.role, "null"]);
      });
      this.dataTable.titles = this.titles;
      this.dataTable.rows = this.rows;
    })
  }
}
