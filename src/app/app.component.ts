import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  constructor(private route: Router, private userService: UserService) { }

  title = 'angular-crud';
  isMenuVisible: boolean = true;
  isAdmin: boolean = false;

  ngDoCheck(): void {
    const currentRoute = this.route.url;
    if (currentRoute === '/login' || currentRoute == '/access/register') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }

    if (this.userService.getRole() === "admin") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;

    }
  }
}
