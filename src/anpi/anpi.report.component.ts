import { Component, OnInit } from '@angular/core';
import { User } from '../main/user';
import { UserService } from '../main/user.service';
import { AnpiReportPrecautionsComponent } from './anpi.report.precautions.component';


@Component({
  selector: 'anpi-report',
  templateUrl: './anpi.report.component.html',
})
export class AnpiReportComponent implements OnInit{
  users: User[];
  constructor(private userservice: UserService){}
  ngOnInit(){
    this.users = this.userservice.getUsers();
  }
}

