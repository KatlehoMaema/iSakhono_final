import { Component } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent {
  displayVal:string="";
  exp: string = "";

  getValue(val:string)
  {
    console.warn(val)
    this.displayVal=val
    this.relocatePage()

  };
 
  relocatePage(): void {

    window.location.replace('/search-job')
  }
}


