import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const job_api = "https://i-sakhono-backend.vercel.app/api/jobs/"
const token = window.sessionStorage.getItem("auth-user") ? JSON.parse(`${window.sessionStorage.getItem("auth-user")}`).token : null
let httpOptions = {
  headers: new HttpHeaders({ 
    'x-access-token': `${token}` 
  })
};

@Injectable({
  providedIn: 'root'
})
export class JobService {

   // private jobDataSource = new BehaviorSubject({jobtitle : '',location: '' , work_type: '' , job_description: ''});
  // currentJobData = this.jobDataSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getAllJobs(){
    console.log(token)
    return this.http.get(job_api, httpOptions)
  }

  getOnejob(){
    console.log(token)
    return this.http.get(job_api, httpOptions)

  }

  createJob(data: any){
    return this.http.post(job_api, data, httpOptions)
  }
}
