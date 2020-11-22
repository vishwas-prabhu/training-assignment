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

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
  }

  addNewAdminToAdminList() {
    this.admin.addNewAdminToAdminList({...this.newAdmin})
  }

}
