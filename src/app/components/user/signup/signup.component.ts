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
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

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
        this.isSuccessful = true;
        if(this.isSuccessful){
          // this.authService.login(username,password).subscribe()
        }
        this.isSignUpFailed = false;
        window.location.replace("sign-in") // last line
      },
      error: err => {
        
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    })
    // this.user.changeData(data);
  }
  
}
