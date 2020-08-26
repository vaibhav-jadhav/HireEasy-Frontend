import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {
  id="";
  pass="";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    if(this.id == "root" && this.pass=="root"){
        alert("Success");
        this.router.navigate(['manage']);

    }
    else{
      alert("Not Successful");
    }
  }

}
