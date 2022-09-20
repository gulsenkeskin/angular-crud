import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserMasterService } from '../services/user-master.service';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  constructor(private userMasterService: UserMasterService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  //modalı açarken verdiğimiz data burdaki data' ya gelir

  ngOnInit(): void {
    this.getAllRole();
    this.getExistData(this.data.userId);
  }

  roleData: any;
  editData: any;

  updateForm = new FormGroup({
    userid: new FormControl({ value: "", disabled: true }),
    role: new FormControl("", Validators.required),
    isActive: new FormControl(true) //checkbox başlangıçta seçili olsun diye
  })

  saveUser() {

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
