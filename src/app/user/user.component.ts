import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../model/user.model';
import { UserMasterService } from '../services/user-master.service';
import * as alertifyjs from 'alertifyjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalPopupComponent } from '../modal-popup/modal-popup.component';


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

  constructor(private service: UserMasterService, private dialog: MatDialog) { }

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
    let popup = this.dialog.open(ModalPopupComponent, {
      width: '400px',
      // height: '400px', 
      exitAnimationDuration: '300ms', enterAnimationDuration: '300ms',
      data: {
        userId: userId
      }
    })

    popup.afterClosed().subscribe(item => {
      this.getAllUser()
    })

  }

  deleteUser(userId: any) {
    alertifyjs.confirm("Remove user", "do you want remove this user?", () => {
      this.service.removeUser(userId).subscribe(item => {
        alertifyjs.success('Removed successfully');
        this.getAllUser();
      })
    }, function () { })

  }


}
