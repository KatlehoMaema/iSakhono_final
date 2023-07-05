import { Injectable } from '@angular/core';


const COMPANY_KEY = 'auth-company';

@Injectable({
  providedIn: 'root'
})
export class CompanyStorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveCompany(company: any): void {
    window.sessionStorage.removeItem(COMPANY_KEY);
    window.sessionStorage.setItem(COMPANY_KEY, JSON.stringify(company));
  }

  public getCompany(): any {
    const company = window.sessionStorage.getItem(COMPANY_KEY);
    console.log(company)
    if (company) {
      return JSON.parse(company);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const company = window.sessionStorage.getItem(COMPANY_KEY);
    console.log(company)
    if (company) {
      return true;
    }

    return false;
  }
}