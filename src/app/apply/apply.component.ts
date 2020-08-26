import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  prev_state={};
  uniqueid="hiii";
  // "full_name":this.Name,
  //       "email": this.Email,
  //       "address":this.adress;
  //       "phone":this.phone,
  //       "resume":this.resume,
         Name="";Email="";Adress="";phone="";resume="";
  constructor(private router: Router,private apiservice:ApiserviceService,private location:Location) 
  { 
    this.prev_state= this.location.getState();
    console.log("PREV");
    console.log(this.prev_state["id"]);
  }

  ngOnInit()
   {
  }
  apply(){
   alert(this.prev_state['id']);
      // full_name email profession skills   emp_id joining_date rating dept linkedin_profile github_profile
      const data =[{
        "id":this.prev_state["id"],
        "full_name":this.Name,
        "email": this.Email,
        "address":this.Adress,
        "phone":this.phone,
        "resume":this.resume,
        }];
        console.log(data);
        this.apiservice.apply(data)
      .subscribe
      (
        data=>{
          console.log("Shevat");
          console.log(data);
          this.uniqueid="Save this ID to track your application : "+data;
          alert("save this id for next Processs \n"+data);
          // this.router.navigate(['']); 
        }
      );
     


  }

}
