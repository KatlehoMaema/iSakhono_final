import { Component } from '@angular/core';
// import { UserService } from "../../../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  userData: any;
  constructor(
    // private user: UserService
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
    window.location.replace("user-profile") // last line
  }

}
