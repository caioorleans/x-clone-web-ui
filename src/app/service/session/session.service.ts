import { Injectable } from '@angular/core';
import { UserCredentials }from '../../dto/responses/userCredentials.dto';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private key:string = 'user'

  constructor() { }

  saveUserSession = (userData:UserCredentials) => localStorage.setItem(this.key, JSON.stringify(userData));

  loadUserSession = ():UserCredentials|null => {
    let userData = localStorage.getItem(this.key)
    return userData ? JSON.parse(userData) : null
  }

  deleteUserSession = () => {
    localStorage.removeItem(this.key)
  }
}
