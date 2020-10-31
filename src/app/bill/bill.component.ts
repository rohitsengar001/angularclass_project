import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  custName="";
  dishName="";
  amount="";
  status="";
  date="";
  billdata="";
  flag=false;
  // userObj={
  //   "custName": "",
  //   "dishName": "",
  //   "amount": "",
  //   "status": "",
  //   "date": ""
  // }
  constructor(private httpService :HttpService ){}

  ngOnInit(): void {
    // this.httpService.getBill().subscribe(info =>{
    //    console.log(info)
    // })
  }
  
  submitBill(billingForm){
    console.warn(billingForm); 
    this.billdata=billingForm;
    this.custName=billingForm.custName,
    this.dishName=billingForm.dishName,
    this.amount=billingForm.amount,
    this.status=billingForm.status,
    this.date=billingForm.date;
  
    
  } 
  pushBill(billdata){
    console.log(billdata);
    this.flag=true;
    this.httpService.postBill(billdata).subscribe((info)=>{console.log("value inserted")})
  }
}
