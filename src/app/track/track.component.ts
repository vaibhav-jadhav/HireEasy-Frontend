import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id="";
  status=[];
  link= "";
  note= "";
  time= "";
  title= "";
  constructor(private apiservice:ApiserviceService) { }

  ngOnInit() {
  }
  track(){
    alert("track");
    const data =[{
      "id":this.id,
      }];
    this.apiservice.getstatus(data)
    .subscribe
    (
      data=>{
        console.log("API");
        // this.data=this.data_rows=data;
        delete data['address'];
        delete data['id'];
        delete data['jobid'];
        delete data['phone'];
        delete data['resume'];
        this.status=data;
        console.log(data);
      }
    );
    // 
    var data1 =[{
      "applyid":this.id,
      }];
    this.apiservice.getinterview(data1)
    .subscribe
    (
      data=>{
        console.log("API");
        // this.data=this.data_rows=data;
        if(data != null){
          this.link= "Title  :"+ data['link'];
          this.note= "Note   :"+data['note'];
          this.time= "Time   :"+data['time'];
          this.title="Title  :"+ data['title'];
        }
        console.log(data);
      }
    );
  }
}

// 4

// 2

// 08669096519
