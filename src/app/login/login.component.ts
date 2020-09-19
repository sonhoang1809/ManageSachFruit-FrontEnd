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
  
  googleLogoURL ="https://raw.githubusercontent.com/sonhoang1809/logos/master/Google-logo.svg";
  facebookLogoURL = "https://raw.githubusercontent.com/sonhoang1809/logos/master/facebook(1).svg";
  zaloLogoURL = "https://raw.githubusercontent.com/sonhoang1809/logos/master/zalo-logo.svg";

  user: SocialUser = null;

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      
      //console.log(this.user);
    });
    //this.socialAuthService.initState.toPromise().then();
  }

  constructor(private dialog: MatDialog, private router: Router, public authService: AuthService,
    private summaryService: SummaryService,
    private socialAuthService: SocialAuthService,
    private generalService: GeneralHelperService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("Google-logo", this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL));
    this.matIconRegistry.addSvgIcon("Facebook-logo",this.domSanitizer.bypassSecurityTrustResourceUrl(this.facebookLogoURL));
    this.matIconRegistry.addSvgIcon("Zalo-logo",this.domSanitizer.bypassSecurityTrustResourceUrl(this.zaloLogoURL));
  };

}
