import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.scss']
})
export class AddUserPageComponent implements OnInit {


  // inputs : name , email , password, ... etc 

  // submit -> calling method from service add -> returns boolean .

  constructor() { }

  ngOnInit(): void {
  }

}
