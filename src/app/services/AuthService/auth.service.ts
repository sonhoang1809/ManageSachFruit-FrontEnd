import { Account } from './../../models/account';
import { LoginSocialRequest } from './../../models/loginSocialRequest';
import { GeneralHelperService } from './../general-helper.service';
import { SummaryService } from './../summary.service';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  account: Account = null;
  user: SocialUser = null;
  loginSocialRequest: LoginSocialRequest = {
    token: null,
    provider: 0,
    tokenSecret: null
  };
  constructor(private socialAuthService: SocialAuthService,private router: Router,
    private generalService: GeneralHelperService, private summaryService: SummaryService) { }

  public setAccount(account: Account){
    this.account = account;
  }

  public isLogin(): boolean{
    if(localStorage.getItem("token")==null){
      return false;
    }
    return true;
  }

  public logOut(){
    this.account == null;
    this.socialAuthService.signOut().then(
      (result)=>{
        localStorage.removeItem("token");
        this.router.navigate(['login']);
      }
    );
  }

  public getAccount(){
    return this.account;
  }

  loginSocial(loginSocialRequest){
    return this.summaryService.loginSocial(loginSocialRequest);
  }

  signInWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (response) => {
        this.user = response;
        
        this.login();
      }
    ).catch(
      (error) => {
        this.generalService.handleError(error);
      }
    );
  }
  login() {
    this.generalService.openWaitingPopup();
    this.loginSocialRequest.token = this.user.authToken;
    if (this.user.provider == "GOOGLE") {
      this.loginSocialRequest.provider = 1;
    } else if (this.user.provider == "FACEBOOK") {
      this.loginSocialRequest.provider = 0;
    }
    this.summaryService.loginSocial(this.loginSocialRequest).subscribe(
      (response) => {
        console.log(response);
        this.setAccount(response.data);
        localStorage.setItem("token",response.data.token);
        this.summaryService.setTokenHeader();
        this.generalService.closeWaitingPopup();
        this.router.navigate(['main']);
      },
      (error) => {
        this.generalService.closeWaitingPopup();
        this.generalService.handleError(error);
      }
    );
  }
}
