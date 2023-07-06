import { Injectable } from '@angular/core';


const EMPLOYER_KEY = 'auth-company';
console.log(EMPLOYER_KEY)

@Injectable({
  providedIn: 'root'
})
export class CompanyStorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveEmployer(employer: any): void {
    window.sessionStorage.removeItem(EMPLOYER_KEY);
    window.sessionStorage.setItem(EMPLOYER_KEY, JSON.stringify(employer));
  }

  public getEmployer(): any {
    const employer = window.sessionStorage.getItem(EMPLOYER_KEY);
    console.log(employer)
    if (employer) {
      return JSON.parse(employer);
    }
    console.log(employer)
    return {};
  }

  public isLoggedIn(): boolean {
    let employer = window.sessionStorage.getItem(EMPLOYER_KEY);
    // console.log(EMPLOYER_KEY)
    console.log(employer)
    if (employer) {
      return true;
    }

    return false;
  }
}