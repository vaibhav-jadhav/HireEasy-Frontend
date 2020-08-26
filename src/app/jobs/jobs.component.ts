import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs=[];
  jobs1=[
    {
    "title":"sOFTWARE eNGINERRR",
    "company":"Oracle",
    "post":"Software engineer",
    "exp":"2",
    "desc":"good cladsjlfkj ldkfljdaskjfl adj lkdsf",
    "resp":"good code etc etc , comunication",
    "skills":"c,cpp,java,ds algo"
  },
  {
    "title":"sOFTWARE eNGINERRR",
    "company":"Oracle",
    "post":"Software engineer",
    "exp":"2",
    "desc":"good cladsjlfkj ldkfljdaskjfl adj lkdsf",
    "resp":"good code etc etc , comunication",
    "skills":"c,cpp,java,ds algo"
  },
];
  constructor(private router: Router,private apiservice:ApiserviceService,private httpClient:HttpClient) { 
    
  }
  // title
  // company
  // post
  // exp
  // desc
  // ur role
  // skills
  
  ngOnInit() {//getEmployees
    this.apiservice.getjobs()
    .subscribe
    (
      data=>{
        console.log("API");
        // this.data=this.data_rows=data;
        this.jobs=data;
        console.log(data);
      }
    );
  }
  getJobs()
    {
    var resp;
    
  }
  apply(data){
    // alert("aplied"+data);
    console.log(data);
    // this.router.navigate(['apply']);
    this.router.navigate(['apply'],{ state: data}); 
  }
  track(){
    this.router.navigate(['track']);
  }

}
