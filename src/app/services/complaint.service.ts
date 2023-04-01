import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }
  rootUrl:string="http://localhost:8090/abc-telecom/complaint"

  saveComplaint(complaint:object):Observable<any>{    
    return this.http.post(this.rootUrl+'/save',complaint,{responseType:'text'});
  }

  getComplaints(cid:string){
    return this.http.get(this.rootUrl+'/list?cid='+cid);
  }

  getComplaintById(id:string){
    return this.http.get(this.rootUrl+'/getComplaintById?id='+id);
  }

  getAllComplaints(status:String){
    return this.http.get(this.rootUrl+'/getAllComplaints?status='+status);
  }

  updateComplaint(complaint:object):Observable<any>{    
    return this.http.post(this.rootUrl+'/update',complaint,{responseType:'text'});
  }

  getAllComplaintsByEngineer(status:String,id:string){
    return this.http.get(this.rootUrl+'/getAllComplaintsByEngineer?status='+status+'&id='+id);
  }
}
