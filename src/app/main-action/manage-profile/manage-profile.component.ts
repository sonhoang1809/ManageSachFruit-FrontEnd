import { Account } from './../../models/account';
import { GeneralHelperService } from './../../services/general-helper.service';
import { AuthService } from './../../services/AuthService/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent implements OnInit {
  titleComponent: string = 'Admin profile';

  account: Account = null;

  constructor(private authService: AuthService,private generalHelper: GeneralHelperService) { }

  ngOnInit(): void {
    this.account = this.authService.getAccount();
  }

}
