import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { CreateUserRequest } from '../../dto/requests/createUserRequest.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `${environment.apiUrl}user/`;

  constructor(private http:HttpClient) { }

  existsByEmail = (email:string) => this.http.get(`${this.url}existsByEmail/${email}`);
  existsByUsername = (username:string) => this.http.get(`${this.url}existsByUsername/${username}`);
  createUser = (createUserRequest:CreateUserRequest) => this.http.post(this.url, createUserRequest)
}
