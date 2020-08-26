import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { HireComponent } from './hire/hire.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {  
  private isButtonVisible = true;
  constructor(private router: Router)
   {

    }
  title = 'delta-frontend';
  jobs(){
    alert("jobs");  
    this.isButtonVisible=false;
    this.router.navigate(['jobs']);
  }
  hire(){
    alert("hire");  
    this.isButtonVisible=false;
    this.router.navigate(['hire']);
  }
}
