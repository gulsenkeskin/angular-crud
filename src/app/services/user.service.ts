import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  prodceedLogin(inputData: any) {
    return this.http.post(`${environment.baseUrl}/User/Authenticate`, inputData);
  }
  isLoggedIn() {
    return localStorage.getItem('token') != null;

  }

  getToken() {
    return localStorage.getItem('token') != null ? localStorage.getItem('token') : '';
  }

  registeration(inputData: any) {
    return this.http.post(`${environment.baseUrl}/User/Register`, inputData);
  }

}
