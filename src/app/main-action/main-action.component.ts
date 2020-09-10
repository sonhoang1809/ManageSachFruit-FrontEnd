import { Notification } from './../models/historyAction';
import { SummaryService } from './../services/summary.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/AuthService/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-main-action',
  templateUrl: './main-action.component.html',
  styleUrls: ['./main-action.component.css']
})
export class MainActionComponent implements OnInit {

  notify: Notification = null;

  constructor(private authService: AuthService, private summaryService: SummaryService,
    private router: Router, private _snackBar: MatSnackBar) { }

  getNotify() {
    //console.log(this.notify);
    this.summaryService.getNewNotification(this.notify.id).subscribe(
      (response) => {
        if(response.data!=null && response.data.id != this.notify.id){
          this.notify = response.data;
          console.log(this.notify);
          if (localStorage.getItem("accountId")!=null && localStorage.getItem("accountId") != this.notify.accountId) {
            this._snackBar.open(this.notify.displayName + ' ' + this.notify.action + ' ' + this.notify.purpose, 'Ok', {
              duration: 2000
            });
          }
        }
        //console.log(this.notify);
      },
      (error) => {
        this._snackBar.open('Error to get notify ' + error.status, 'Ok', {
          duration: 2000
        });
      }
    )
  }
  ngOnInit(): void {
    this.notify = {
      id: null,
      accountId: null,
      email: null,
      displayName: null,
      action: null,
      purpose: null,
      time: null
    };
    if (this.authService.isLogin() == false) {
      this.router.navigate(['login']);
    } else {
      // interval(15000).subscribe(
      //   val => this.getNotify()
      // );
    }
    //setInterval(this.getNotify(), 2500 );

  }

}
