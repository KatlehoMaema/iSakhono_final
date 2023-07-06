import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const company_api = "https://i-sakhono-backend.vercel.app/api/company/"

@Injectable()
export class EmployerService {
  private companyDataSource = new BehaviorSubject({companyname : '', password : ''});
  currentCompanyData = this.companyDataSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }
  changeData(newCompanyData:any)  {
    this.companyDataSource.next(newCompanyData)
  }
  updateCompany(data: any, id: any){
    return this.http.put(company_api+id, data)
  }
}