import { Component, OnInit } from '@angular/core';
import { CompanyStorageService } from 'src/app/service/company.storage.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  currentEmployer: any
  constructor(private storage: CompanyStorageService) {}

  ngOnInit(): void {
    this.currentEmployer = this.storage.getEmployer()
    
  }
  searchCandidates(){
    

    window.location.replace("search-candindate")
  }

}
