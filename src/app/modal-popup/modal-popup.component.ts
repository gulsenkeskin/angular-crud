import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserMasterService } from '../services/user-master.service';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  constructor(private userMasterService: UserMasterService, @Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ModalPopupComponent>) { }
  //modalı açarken verdiğimiz data burdaki Inject iele aldıımız data' ya gelir
  //MatDialogRef e modalı kapatırken vs ihtiyaç duyarız

  ngOnInit(): void {
    this.getAllRole();
    this.getExistData(this.data.userId);
  }

  roleData: any;
  editData: any;
  saveData: any;

  updateForm = new FormGroup({
    userid: new FormControl({ value: "", disabled: true }),
    role: new FormControl("", Validators.required),
    isActive: new FormControl(true) //checkbox başlangıçta seçili olsun diye
  })

  saveUser() {
    if (this.updateForm.valid) {
      this.userMasterService.updateUser(this.updateForm.getRawValue()).subscribe(item => {
        this.saveData = item;
        console.log(this.saveData)
        if (this.saveData.result === 'pass') {
          alertifyjs.success("Updated successfully")
          this.ref.close();
        } else {
          alertifyjs.error("Failed try again");
        }
      })
    }

  }

  getAllRole() {

    this.userMasterService.getAllRoles().subscribe(item => {
      this.roleData = item;
    })
  }

  getExistData(userId: any) {
    this.userMasterService.getUserById(userId).subscribe(
      item => {
        this.editData = item;
        if (this.editData != null) {
          this.updateForm.setValue({ userid: this.editData.userid, role: this.editData.role, isActive: this.editData.isActive })
        }
      }
    )

  }

}
