import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {
  apiurl = `${environment.baseUrl}/api/UserMaster`;
  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get(this.apiurl)
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
}
