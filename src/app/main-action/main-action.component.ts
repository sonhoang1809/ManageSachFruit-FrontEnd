import { Router } from '@angular/router';
import { AuthService } from './../services/AuthService/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-action',
  templateUrl: './main-action.component.html',
  styleUrls: ['./main-action.component.css']
})
export class MainActionComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isLogin()==false){
      this.router.navigate(['login']);
    }
  }

}
