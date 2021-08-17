import { User } from 'src/app/demo/dell/models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getAllUsers(successCallback, failCallback): void {

    setTimeout(() => {
      try {
        const users: User[] = [];
        users.push(new User(1, "abed", "watted", "abdjat@gmail.com", "1234567", true, "admin", null));
        users.push(new User(2, "saleh", "bahooty", "saleh@gmail.com", "saleh123", true, "user", null));
        users.push(new User(3, "muhammed", "massarwe", "muhammed@gmail.com", "muham123", true, "user", null));
        users.push(new User(4, "ibrahem", "shahen", "ibrahem@gmail.com", "ibrahem123", true, "user", null));
        users.push(new User(5, "fayroz", "moade", "fayroz@gmail.com", "fayroz123", true, "user", null));
        users.push(new User(6, "may", "darawshi", "may@gmail.com", "may123", true, "user", null));
        successCallback(users);
      } catch (err) {
        failCallback(err);
      }
    }, 2000)
  }

  // public addUser(user : User) : void{

  // }
}
