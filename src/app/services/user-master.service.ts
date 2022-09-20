import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {
  apiurl = `${environment.baseUrl}/api/UserMaster`;
  constructor(private http: HttpClient) { }

  getAllUser(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiurl)
  }

  getUserById(userId: any) {
    return this.http.get(`${this.apiurl}/${userId}`);
  }

  removeUser(userId: any) {
    return this.http.delete(`${this.apiurl}/${userId}`);
  }

  updateUser(inputData: any) {
    return this.http.post(`${this.apiurl}/ActivateUser`, inputData);
  }

  getAllRoles() {
    return this.http.get(`${environment.baseUrl}/User/GetAllRole`)

  }
}
