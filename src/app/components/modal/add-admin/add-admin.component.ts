import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  @Input() newAdmin;
  @Input() disableAdd;
  @Input() adminCategory;
  @Output() resetAdmin = new EventEmitter();

  constructor(private admin: AdminService,
              private validate: ValidationService) { }

  ngOnInit(): void {
  }

  addNewAdminToAdminList(): void {
    if (this.validate.validateEmail(this.newAdmin.email) &&
        this.validate.validateEmployeeCode(this.newAdmin.employeeNumber) &&
        this.validate.validateUsername(this.newAdmin.name)
    ){
      this.newAdmin.id = Math.floor(Math.random() * 10000 + 1);
      this.newAdmin.type = this.adminCategory;
      this.admin.addNewAdminToAdminList({ ...this.newAdmin });
      this.resetAdmin.emit();
    }
  }
}
