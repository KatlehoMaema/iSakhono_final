import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegiserComponent } from './components/user/regiser/regiser.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ProfileEditComponent } from './components/user/profile-edit/profile-edit.component';
import { JobSearchComponent } from './components/user/job-search/job-search.component';
import { CompanyProfileComponent } from './components/company/company-profile/company-profile.component';
import { CandidateSearchComponent } from './components/company/candidate-search/candidate-search.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegiserComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    JobSearchComponent,
    CompanyProfileComponent,
    CandidateSearchComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
