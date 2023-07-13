import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';
import { PostjobAuthService } from 'src/app/service/postjob.auth.service';
import { PostjobStorageService } from 'src/app/service/postjob.storage.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {

  form: any = {
    jobtitle: null,
    location: null,
    work_type: null,
    job_description: null
  };
  isPosted = false;
  isNotPosted = false;
  errorMessage = '';

  constructor(
    // private user: UserService
    private jobService: JobService,
    private PostjobAuthService: PostjobAuthService,
    private PostjobStorageService: PostjobStorageService
    ) {}

  ngOnInit() {
    // this.user.currentUserData.subscribe(userData => (this.userData = userData));
    // if (this.PostjobStorageService.isPosted()) {
    //   this.isPosted = true;
    //   // this.roles = this.storageService.getUser().roles;
    // }
  }

  // changeData(event:any) {
  //   var msg = event.target.value;
  //   // this.user.changeData(msg);
  // }

  post() {
    // this.user.changeData(data);
    console.log(this.form);
    if(this.form) {console.log("Not it")} 
    this.jobService.createJob(this.form).subscribe({
      next: form => {
        console.log(this.form);
        console.log("Hello World")
        this.PostjobStorageService.saveJob(form);
        this.isPosted = true;
        this.isNotPosted = false;
        window.location.replace("search-job") // last line
      },
      error: err => {
        console.error(err.message)
        // console.log("Hello World")

        this.errorMessage = err.error.message;
        this.isNotPosted = true;
      }
    })
  }
  // addd

}


