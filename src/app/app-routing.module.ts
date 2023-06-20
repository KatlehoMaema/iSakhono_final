import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegiserComponent } from './components/user/regiser/regiser.component';
import { LoginComponent } from './components/user/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: RegiserComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'regiser', component: RegiserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
