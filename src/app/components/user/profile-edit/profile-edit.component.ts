import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms'
// import { FormGroup, FormControl } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})

export class ProfileEditComponent {

  userDetails = {

          firstName: "",
          lastName: "",
          dateOfBirth: "",
            gender: "",
          phoneNumber: "",  
            emailAddress: "",
            homeAddress: ""
  }

  user: any [] = []

  onSave(){
    console.log(this.userDetails)
    this.user.push(this.userDetails)
    // console.log(this.user)


    window.location.replace("user-profile")
    
  }

  
 


}



