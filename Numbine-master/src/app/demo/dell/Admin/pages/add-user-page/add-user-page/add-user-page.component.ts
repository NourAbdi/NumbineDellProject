import { UserService } from './../../../../services/UserService/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/demo/dell/models/User';

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.scss']
})
export class AddUserPageComponent implements OnInit {


  // inputs : name , email , password, ... etc 
  // create inputs, bind with html elements -> take inputs,
  // create user from them -> call addUser(user) = > in user.service -> adds the user to the users array.
  // submit -> calling method from service add -> returns boolean .

  public user = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

  }

  public createUser(name: string, email: string, phone: string, password: string, role: string, productGroup: string): void {
    // this.name = name;
    // this.email = email;
    // this.phone = phone;
    // this.password = password;
    // this.role = role;
    // this.user = new User(10, this.name, " ", this.email, this.password, this.status, this.role, null);
    console.log(this.user);

    this.userService.addUser(this.user);
  }

  public showUser(): void {
    alert(`
    Name: ${this.user.name} 
    Email: ${this.user.email}
    phone: ${this.user.phone}
    Password: ${this.user.password}
    Role: ${this.user.role}
    Product_Group: ${this.user.productGroup}
    Status: ${this.user.status}
    `);
  }

}
