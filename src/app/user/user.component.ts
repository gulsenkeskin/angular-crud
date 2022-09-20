import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../model/user.model';
import { UserMasterService } from '../services/user-master.service';
import { alertify } from 'alertifyjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['userid', 'name', 'email', 'isActive', 'role', 'action'];
  dataSource: any;
  userDetail: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: UserMasterService) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser() {
    this.service.getAllUser().subscribe(item => {
      this.userDetail = item;
      this.dataSource = new MatTableDataSource<UserModel>(this.userDetail);
      this.dataSource.paginator = this.paginator;
    })
  }

  updateUser(userId: any) {

  }

  deleteUser(userId: any) {
    this.service.removeUser(userId).subscribe(item => {
      this.getAllUser();

    })

  }


}
