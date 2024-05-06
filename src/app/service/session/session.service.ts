import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  key:string = 'user'

  constructor() { }

  saveUserSession = (userData:any) => localStorage.setItem(this.key, JSON.stringify(userData));

  loadUserSession = () => {
    let userData = localStorage.getItem(this.key)
    return userData ? JSON.parse(userData) : null
  }

  deleteUserSession = () => {
    localStorage.removeItem(this.key)
  }
}
