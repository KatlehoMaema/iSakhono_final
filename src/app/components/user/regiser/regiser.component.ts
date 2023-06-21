import { Component } from '@angular/core';
import { UserService } from "../../../service/user.service";

@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.component.html',
  styleUrls: ['./regiser.component.scss']
})
export class RegiserComponent {

   
  userData: any;
  keyboard: any;
  value = "";
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.currentUserData.subscribe((userData: any) => this.userData = userData)
  }
  register(data: any){
    
    this.user.changeData(data);
  }
  
}
