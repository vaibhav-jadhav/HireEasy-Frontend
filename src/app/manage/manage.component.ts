import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private router: Router,private apiservice:ApiserviceService) { }
  candata=[];
  headers = ["address", "applyid", "email", "full_name", "jobid", "phone", "feedback", "resume","status"];
//  address: "sangli"
// applyid: "cG8j7KoFA0W7UJNLyTnMKFPJi"
// email: "vaibhav.jadhav.csm@gmail.com"
// feedback: ""
// full_name: "VAIBHAV JADHAV"
// id: 3
// jobid: "2"
// phone: "08669096519"
// resume: "http://localhost:4200/apply"
// status: ""
  ngOnInit() {//getEmployees
    this.apiservice.getapps()
    .subscribe
    (
      data=>{
        console.log("API");
        // this.data=this.data_rows=data;
        this.candata=data;
        console.log(this.candata);
      }
    );
  }
  managechange(data){
    alert(data);
    var i=0;
    for(i=0;i<this.candata.length;i++){
      // if(this.candata[])
      if(this.candata[i]['applyid'] == data){
        this.router.navigate(['update'],{ state: this.candata[i] }); 
      }
    }
    
  }

}
