import { Account } from './../../models/account';
import { AuthService } from './../../services/AuthService/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  account: Account = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.account = this.authService.getAccount();
  }
  onLogout(){
    this.authService.logOut();
  }

}
