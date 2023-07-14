import { Injectable } from '@angular/core';


const USER_KEY = 'auth-user';
const USER_TOKEN = "token"

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log(user)
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log(user)
    if (user) {
      return true;
    }

    return false;
  }

  public isSuccessful(): boolean {
    let employer = window.sessionStorage.getItem(USER_KEY);
    // console.log(EMPLOYER_KEY)
    console.log(employer)
    if (employer) {
      return true;
    }

  return false;
}
}
