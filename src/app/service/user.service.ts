import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const user_api = "https://i-sakhono-backend.vercel.app/api/users/"
@Injectable()
export class UserService {
  private userDataSource = new BehaviorSubject({email : '', password : ''});
  currentUserData = this.userDataSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }
  changeData(newUserData:any)  {
    this.userDataSource.next(newUserData)
  }
  getUser(data: any, id: any){
    return this.http.get(user_api+id)
  }
  updateUser(data: any, id: any){
    return this.http.put(user_api+id, data)
  }
  
}