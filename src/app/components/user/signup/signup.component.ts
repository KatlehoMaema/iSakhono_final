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
  register(){
    const { username, email, password } = this.form;
    console.log(this.form)
    this.authService.registerUser(username,email,password).subscribe({
      next: data => {
        console.log(data)
        console.log("Hello WOrld")
        window.location.replace("user-profile") // last line
      },
      error: err => {
        console.error(err.message)
      }
    })
    // this.user.changeData(data);
  }
  
}
