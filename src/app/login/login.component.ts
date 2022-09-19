import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private route: Router) { }
  responseData: any;

  ngOnInit(): void {
    localStorage.clear();
  }

  prodceedLogin(loginData: any) {
    if (loginData.valid) {
      this.userService.prodceedLogin(loginData.value).subscribe(item => {
        this.responseData = item;
        if (this.responseData != null) {
          localStorage.setItem("token", this.responseData.jwtToken)

        } else {
          alert("Login failed")
        }

      })

    }


  }
}
