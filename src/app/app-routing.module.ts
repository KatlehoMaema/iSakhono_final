import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { JobSearchComponent } from './components/user/job-search/job-search.component';
import { ProfileEditComponent } from './components/user/profile-edit/profile-edit.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {
    path: "home", component: HomeComponent
  },
  {
    path: "register-user", component: SignupComponent
  },
  {
    path: "user-profile", component: ProfileComponent
  },
  {
    path: "search-job", component: JobSearchComponent
  },
  {
    path: "profile-edit", component: ProfileEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
