import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { alertify } from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }
  responseData: any;

  ngOnInit(): void {
  }

  redirectLogin() {
    this.router.navigate(['login']);
  }

  reactiveform = new FormGroup({
    userid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
  })


  saveUser() {
    if (this.reactiveform.valid) {
      this.userService.registeration(this.reactiveform.value).subscribe(
        item => {
          this.responseData = item;
          if (this.responseData.result == 'pass') {
            alertify.successfully('Register successfully please contact admin for activation');
            this.redirectLogin();
          } else {
            alertify.error('failed try again')
          }

        }
      )
    }

  }

}
