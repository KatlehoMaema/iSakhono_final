import { Component } from '@angular/core';
// import { UserService } from "../../../service/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

   
  userData: any;
  keyboard: any;
  value = "";
  constructor(
    // private user: UserService
    ) { }

  ngOnInit() {
    // this.user.currentUserData.subscribe((userData: any) => this.userData = userData)
  }
  signup(data: any){
    
    // this.user.changeData(data);
  }
  
}
