import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  proceedLogin(inputData: any) {

    return this.http.post(`${environment.baseUrl}/User/Authenticate`, inputData);
  }

}
