import { Router } from '@angular/router';
import { AuthService } from './../../services/AuthService/auth.service';

import { ProductsService } from '../manage-products/ProductServices/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  titleComponent: string = 'E-commerce Dashboard';

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isLogin()==false){
      this.router.navigate(['login']);
    }
  }

}
