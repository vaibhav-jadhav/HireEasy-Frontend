import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {
prev_state={};
title="";link="";time="";note="";status="";feedback="";date="";

  constructor(private apiservice:ApiserviceService,private location:Location) { 
    this.prev_state= this.location.getState();
    delete this.prev_state['navigationId'];
    console.log("PREV");
    console.log(this.prev_state);

  }

  ngOnInit() {
  }
  updateinterview()
  {
    // alert(
    //   this.prev_state['applyid']+
    //   this.title+
    //   this.link+
    //   this.time+
    //   this.note);

      // alert(this.prev_state['id']);
      // full_name email profession skills   emp_id joining_date rating dept linkedin_profile github_profile
      const data =[{
        "applyid":this.prev_state["applyid"],
        "title":this.title,
        "link": this.link,
        "time":this.date + this.time,
        "note":this.note,
        }];
        console.log(data);
        this.apiservice.addinteview(data)
      .subscribe
      (
        data=>{
          console.log("Shevat");
          console.log(data);
          alert("Interview Scheduled \n"+data);
          this.title="";this.link="";this.time="";this.note="";this.status="";this.feedback="";this.date="";
          // this.router.navigate(['']); 
        }
      );



  }
  feedupdate(){
    alert(this.status+this.feedback);

    const data =[{
      "applyid":this.prev_state["applyid"],
      "status":this.status,
      "feedback": this.feedback,
      }];
      console.log(data);
      this.apiservice.feedupdate(data)
    .subscribe
    (
      data=>{
        console.log("Shevat");
        console.log(data);
        alert("updated \n"+data);
        this.title="";this.link="";this.time="";this.note="";this.status="";this.feedback="";this.date="";
        // this.router.navigate(['']); 
      }
    );

  }

}
// addinteview