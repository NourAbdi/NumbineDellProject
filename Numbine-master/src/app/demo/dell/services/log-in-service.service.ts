import { getLocaleNumberSymbol } from '@angular/common';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { User } from 'src/app/demo/dell/models/User';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class LogInServiceService {

  constructor() { }

  public validteUserAsync(successCallback, failCallback, email: string, password: string): void {
    setTimeout(() => {
      try {
        const usr: User = new User(1, 'test', 'testo', email, password, true, null, null);
        successCallback(usr);
      }
      catch (err) {
        failCallback(err);

      }
    }, 3000);
  }
}