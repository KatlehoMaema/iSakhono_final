import { Component, OnInit } from '@angular/core';
import { CompanyStorageService } from 'src/app/service/company.storage.service';
// import { EmployerService } from 'src/app/service/employers.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {


  currentEmployer: any
 
  constructor(
    private storage: CompanyStorageService
    // private EmployerService: EmployerService

    ) {}
  ngOnInit(): void {
    this.currentEmployer = this.storage.getEmployer()
    
  }
  searchCandidates(){
    

    window.location.replace("search-candidate")
  }

  // getCompany(data: any, id: any){
  //   return this.http.get(company_api+id)
  // }
  // getCompany() {
  //   this.EmployerService.getCompany().subscribe({
  //     next: data => {
  //       this.job = data
  //       console.log(this.job)
  //     },
  //     error: e => {
  //       console.error(e.message)
  //     }
  //   })
  // }

}
