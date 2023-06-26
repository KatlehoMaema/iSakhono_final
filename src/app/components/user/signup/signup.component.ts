import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
// import { UserService } from "../../../service/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };
  userData: any;
  keyboard: any;
  value = "";
  constructor(
    // private user: UserService
    private authService: AuthService
    ) { }

  ngOnInit() {
    // this.user.currentUserData.subscribe((userData: any) => this.userData = userData)
  }
  signup(){
    
    // this.user.changeData(data);
  }
  
}
