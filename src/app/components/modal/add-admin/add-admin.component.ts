import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  @Input() newAdmin;
  @Input() disableAdd;
  @Input() adminCategory;

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
  }

  addNewAdminToAdminList() {
    this.newAdmin.id = Math.floor(Math.random() * 10000 + 1);
    this.newAdmin.type = this.adminCategory;
    this.admin.addNewAdminToAdminList({ ...this.newAdmin })
  }
}
