
import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from  '@angular/material/dialog';
import { MessageComponent } from './../message/message.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  public  email:  string  =  "";
  public  password:  string  =  "";

  ngOnInit(): void {
  }
  constructor(private dialog:  MatDialog, private router:  Router) { }
  login(){

      if(this.email  ===  "email@email.com"  &&  this.password  === "p@ssw0rd")
      {
          this.router.navigate(['success']);
      }
      else
      {
          this.dialog.open(MessageComponent,
            { data: {
                message:  "Error!!!"
              },
              width: '250px',
              height: '120px',
              position:{bottom: '50px', right: '50px'}
            }
          );
      }
  }
}
