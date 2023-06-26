import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ProfileEditComponent } from './components/user/profile-edit/profile-edit.component';
import { JobSearchComponent } from './components/user/job-search/job-search.component';
import { CompanyProfileComponent } from './components/company/company-profile/company-profile.component';
import { CandidateSearchComponent } from './components/company/candidate-search/candidate-search.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { CompanyRegisterComponent } from './components/company/company-register/company-register.component';
import { CompanyLoginComponent } from './components/company/company-login/company-login.component';
import { CompanyProfileEditComponent } from './components/company/company-profile-edit/company-profile-edit.component';
import { BottomNavbarComponent } from './components/user/bottom-navbar/bottom-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    JobSearchComponent,
    CompanyProfileComponent,
    CandidateSearchComponent,
    SignupComponent,
    CompanyRegisterComponent,
    CompanyLoginComponent,
    CompanyProfileEditComponent,
    BottomNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
