import { Component, Input, OnInit } from '@angular/core';
import { Admin } from 'src/app/admin.interface';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input() adminCategory;
  admins: Admin[];
  newAdmin: Admin;
  disableAdd: boolean;

  constructor(public adminService: AdminService) {
    this.disableAdd = true;
  }

  ngOnInit(): void {
    this.adminService.getAdminList().subscribe(res => this.admins = res);
    this.resetNewAdmin();
  }

  resetNewAdmin(): void {
    this.newAdmin = {
      id: null,
      name: '',
      employeeNumber: '',
      email: '',
      type: ''
    };
    this.disableAdd = false;
  }

  onClickEditDetailsOfAdmin(UpdateAdmin): void {
    this.admins.find((item) => {
      if (item === UpdateAdmin) {
        this.newAdmin = UpdateAdmin;
        this.disableAdd = true;
      }
    });
  }

  onClickUpdateAdmin(): void {
    this.adminService.updateAdmin({ ...this.newAdmin });
    this.resetNewAdmin();
  }

  onClickDeleteAdmin(id): void {
    this.adminService.deleteAdmin(id);
  }
}
