import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { JobSearchComponent } from './components/user/job-search/job-search.component';
import { ProfileEditComponent } from './components/user/profile-edit/profile-edit.component';
import { LoginComponent } from './components/user/login/login.component';
import { CandidateSearchComponent } from './components/company/candidate-search/candidate-search.component';
import { CompanyProfileComponent } from './components/company/company-profile/company-profile.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {
    path: "home", component: HomeComponent
  },
  {
    path: "register-user", component: SignupComponent
  },
  {
    path: "sign-in", component: LoginComponent
  },
  {
    path: "user-profile", component: ProfileComponent
  },
  {
    path: "search-job", component: JobSearchComponent
  },
  {
    path: "profile-edit", component: ProfileEditComponent
  },
  {
    path: "candidate-search", component: CandidateSearchComponent
  },
  {
    path: "company-profile", component: CompanyProfileComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
