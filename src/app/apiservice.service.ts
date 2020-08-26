import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpClient:HttpClient) 
  {

   }
   getjobs()
   {
     var resp;
 
     let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
     return this.httpClient.post<any>('http://127.0.0.1:8000/api/getjobs/',{ headers: headers });
     
   }
   getstatus(data){
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    console.log("in api");
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/getstatus/', body, { headers: headers });
  
   }
   apply(data):Observable<any>{
    var resp;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    console.log("in api");
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/apply/', body, { headers: headers });
  }
  getinterview(data):Observable<any>{
    var resp;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    console.log("in api");
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/getinterview/', body, { headers: headers });
  }
  getapps()
   {
     var resp;
     let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
     return this.httpClient.post<any>('http://127.0.0.1:8000/api/getapps/',{ headers: headers });
     
   }
   
   feedupdate(data):Observable<any>{
    var resp;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    console.log("in api");
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/feedupdate/', body, { headers: headers });
  }
   addinteview(data):Observable<any>{
    var resp;
    let body = JSON.stringify(data);
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    console.log("in api");
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/addinteview/', body, { headers: headers });
  }
}
