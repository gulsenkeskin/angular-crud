import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserMasterService } from '../services/user-master.service';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

  constructor(private userMasterService: UserMasterService) { }

  ngOnInit(): void {
    this.getAllRole();
  }

  roleData: any;
  editData: any;

  updateForm = new FormGroup({
    userid: new FormControl(""),
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

  getExistData() {

  }

}
