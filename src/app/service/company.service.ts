import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const employer_api = "https://i-sakhono-backend.vercel.app/api/employer/"

@Injectable()
export class CompanyService {
  private companyDataSource = new BehaviorSubject({companyemail : '', password : ''});
  currentCompanyData = this.companyDataSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }
  changeData(newCompanyData:any)  {
    this.companyDataSource.next(newCompanyData)
  }
  updateCompany(data: any, id: any){
    return this.http.put(employer_api+id, data)
  }
}