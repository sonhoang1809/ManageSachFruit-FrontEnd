import { LoginSocialRequest } from './../../models/loginSocialRequest';
import { SummaryService } from './../../services/summary.service';
import { GeneralHelperService } from './../../services/general-helper.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: SocialUser = null;

  constructor(private socialAuthService: SocialAuthService,
    private generalService: GeneralHelperService, private summaryService: SummaryService) {
    
  }
  loginSocial(loginSocialRequest){
    return this.summaryService.loginSocial(loginSocialRequest);
  }

  signInWithGoogle(): Promise<SocialUser> {
    return this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
