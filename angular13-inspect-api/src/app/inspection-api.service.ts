import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {
  readonly inspectionAPIUrl = "httpm://localhost:7240/api"

  constructor(private http:HttpClient) { }

  //INSPECTIONS

  getInspectionList():Observable<any[]>{
    return this.http.get<any>(this.inspectionsAPIUrl + '/inspections');
  }

  addInspection(data:any){
    return this.http.post(this.inspectionsAPIUrl + '/inspections', data);
  }

  updateInspection(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/inspections/${id}`, data);
  }

  deleteInspection(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/inspections/${id}`);
  }

  //INSPECTION TYPE

  getInspectionTypeList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectionstype');
  }

  addInspectionType(data:any){
    return this.http.post(this.inspectionAPIUrl + '/inspectionstype', data);
  }

  updateInspectionType(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/inspectionstype/${id}`, data);
  }

  deleteInspectionType(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/inspectionstype/${id}`);
  }

  //STATUS

  getStatusesList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/Statuses');
  }

  addStatus(data:any){
    return.this.post(this.inspectionAPIUrl +'/statuses', data);
  }

  updateStatus(id:number|string, data:any){
    return this.http.put(this.inspectionsAPIUrl + `/statuses/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/statuses/${id}`);
  }
}
