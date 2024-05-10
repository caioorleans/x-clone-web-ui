import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../../dto/requests/loginRequest.dto';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.apiUrl}auth/`

  constructor(private http:HttpClient) { }

  login = (loginRequest: LoginRequest) => this.http.post(`${this.url}login`, loginRequest);

}
