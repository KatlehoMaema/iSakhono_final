import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const auth_api = 'https://i-sakhono-backend.vercel.app/api/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(username: string, email: string, password: string){
    return this.http.post(auth_api+"/signup", {username,email,password})
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      auth_api + '/signin',
      {
        username,
        password,
      }
    );
  }
}
