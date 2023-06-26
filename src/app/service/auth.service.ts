import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const auth_api = 'https://i-sakhono-backend.vercel.app/api/auth/'
const user_api = "https://i-sakhono-backend.vercel.app/api/users/"


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(username: string, email: string, password: string){
    return this.http.post(auth_api+"signup", {username,email,password})
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      auth_api + 'signin',
      {
        username,
        password,
      }
    );
  }

  logout(){
    return this.http.post(auth_api + "signout", {})
  }

  updateUser(data: any, id: any){
    return this.http.put(user_api+id, data)
  }
}
