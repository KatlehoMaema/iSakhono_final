import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
// import { UserService } from "../../../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  form: any = {
    username: null,
    password: null
  };

  userData: any;
  constructor(
    // private user: UserService
    private authService: AuthService
    ) {}

  ngOnInit() {
    // this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event:any) {
    var msg = event.target.value;
    // this.user.changeData(msg);
  }
  login() {
    // this.user.changeData(data);
    const { username, password } = this.form

    this.authService.login(username, password).subscribe({
      next: data => {
        console.log(data);
        window.location.replace("user-profile") // last line
      },
      error: err => {
        console.error(err.message)
      }
    })
    
  }

}
