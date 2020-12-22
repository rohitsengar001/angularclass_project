import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
})
export class DashboardContentComponent implements OnInit {
  users;
  userObj={
    custName:"",
    dishName:"", 
    amount:"",
    date:"",
    id:""
  };
  data = 'hey';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getBill();
  }

  getBill(bill?) {
    this.httpService.getBill().subscribe((info) => {
      // console.log(info,'data')
      this.users = info;
      console.log(Object.keys(info[0]));
      // console.log(Object.values[info[0]])
    });
  }
  updateBill(form){
    console.log(this.userObj);
    // this.httpService.editBill(this.userObj).subscribe((info)=>{
    //   form.reset();
    // })
  }
} 