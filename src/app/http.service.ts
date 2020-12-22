import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'
//instance create on root level
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // baseUrl: 'http://localhost:3000/'
  constructor(private httpClient: HttpClient) { }

  // postBill(bill) {
  //  return this.httpClient.post(`${this.baseUrl}/posts`,bill )
  // } 
  
  getBill() {
    return this.httpClient.get(`${environment.baseUrl}/bill`) 
   } 
   postBill(data){
     console.log(data)
     return this.httpClient.post<any>(`${environment.baseUrl}/bill`,data)
   }
   editBill(data){
     console.log(data.userId);
     let userId=data.userId;
     return this.httpClient.put(`${environment.baseUrl}/bill/`+userId,data)
   } 
   deleteBill(data){
     return this.httpClient.delete(`${environment.baseUrl}/bill/data.id`)
   }
}
