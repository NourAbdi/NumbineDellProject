import { observable, Observable } from 'rxjs';
import { User } from 'src/app/demo/dell/models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];

  constructor() {
    this.users.push(new User(1, "abed", "abdjat@gmail.com", "0503511711", "1234567", true, "admin", null));
    this.users.push(new User(2, "saleh", "saleh@gmail.com", "0503511711", "saleh123", true, "user", null));
    this.users.push(new User(3, "muhammed", "muhammed@gmail.com", "0503511711", "muham123", true, "user", null));
    this.users.push(new User(4, "ibrahem", "ibrahem@gmail.com", "0503511711", "ibrahem123", true, "user", null));
    this.users.push(new User(5, "fayroz", "fayroz@gmail.com", "0503511711", "fayroz123", true, "user", null));
    this.users.push(new User(6, "may", "may@gmail.com", "0503511711", "may123", true, "user", null));
  }

  public getAllUsers(): Observable<User[]> {
    let ob = new Observable<User[]>(observer => {
      try {
        setTimeout(() => {
          observer.next(this.users);
        }, 1000);
      } catch (error) {
        observer.error(error);
      }
    });
    return ob;
  }

  public addUser(user: User): void {
    this.users.push(user);
  }

  public getUsersByRole(role: string): Observable<User[]> {
    const filteredUsers: User[] = [];
    let ob = new Observable<User[]>(observer => {
      try {
        setTimeout(() => {
          this.users.forEach((user) => {
            if (user.role == role) {
              filteredUsers.push(user);
            }
          })
          // observer.next(this.users);
        }, 1000);
      } catch (error) {
        observer.error(error);
      }
    });
    return ob;
  }

}
