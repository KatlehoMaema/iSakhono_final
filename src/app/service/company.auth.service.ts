import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { CompanyService } from './company.service';

const auth_api = 'https://i-sakhono-backend.vercel.app/api/auth/'
const employer_api = "https://i-sakhono-backend.vercel.app/api/employer/"

@Injectable({
  providedIn: 'root'
})
export class CompanyAuthService {

  constructor(
    private http: HttpClient
  ) { }

  
  registerCompany(companyname: string, company_email: string, industry: string, location: string, password: string){
    return this.http.post(auth_api+"signup", {companyname, company_email, industry, location, password})
  }

  login(companyemail: string, password: string): Observable<any>  {
    return this.http.post(
      employer_api + 'signin',
      {
        companyemail,
        password,
      }
    );
  }

  logout(){
    sessionStorage.clear()
  }

  updatecompanyprofile(data: any, id: any){
    return this.http.put(employer_api+id, data)
  }
}

