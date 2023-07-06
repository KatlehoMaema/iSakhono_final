import { Component } from '@angular/core';

@Component({
  selector: 'app-company-profile-edit',
  templateUrl: './company-profile-edit.component.html',
  styleUrls: ['./company-profile-edit.component.scss']
})
export class CompanyProfileEditComponent {
  
  userDetails = {

    campanyName: "",
    industry: "",
    location: "",
     contactPerson: "",
    phoneNumber: "",  
      emailAddress: "",
      
}

user: any [] = []

onSave(){
console.log(this.userDetails)
this.user.push(this.userDetails)
// console.log(this.user)

}
  


}
