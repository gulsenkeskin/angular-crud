import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectLogin() {
    this.router.navigate(['login']);
  }

  reactiveForm = new FormGroup({
    userid: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  })

}
