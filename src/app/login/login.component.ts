import { AuthService } from './../services/AuthService/auth.service';

import { SummaryService } from './../services/summary.service';
import { LoginSocialRequest } from './../models/loginSocialRequest';
import { GeneralHelperService } from './../services/general-helper.service';

import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessageComponent } from './../message/message.component';
import { Router } from '@angular/router';
import { SocialUser, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  googleLogoURL =
    "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

  user: SocialUser = null;
  // loginSocialRequest: LoginSocialRequest = {
  //   token: null,
  //   provider: 0,
  //   tokenSecret: null
  // };
  public email: string = "";
  public password: string = "";


  ngOnInit(): void {
    this.socialAuthService.initState.toPromise().then();
  }

  constructor(private dialog: MatDialog, private router: Router, public authService: AuthService,
    private summaryService: SummaryService,
    private socialAuthService: SocialAuthService,
    private generalService: GeneralHelperService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("logo", this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL));
  };

  // login() {
  //   this.generalService.openWaitingPopup();
  //   this.loginSocialRequest.token = this.user.authToken;
  //   if (this.user.provider == "GOOGLE") {
  //     this.loginSocialRequest.provider = 1;
  //   } else if (this.user.provider == "FACEBOOK") {
  //     this.loginSocialRequest.provider = 0;
  //   }
  //   this.authService.loginSocial(this.loginSocialRequest).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.generalService.closeWaitingPopup();
  //       this.router.navigate(['main']);
  //     },
  //     (error) => {
  //       this.generalService.closeWaitingPopup();
  //       this.generalService.handleError(error);
  //     }
  //   );
  // }

  loginByGoogle() {
    // this.authService.signInWithGoogle().then(
    //   (response) => {
    //     this.user = response;
    //     //console.log(response);
    //     //return response;
    //     this.login();
    //   }
    // ).catch(
    //   (error) => {
    //     this.generalService.handleError(error);
    //   }
    // );
  }
}
