import { Component, OnInit } from '@angular/core';
import { HttpService }  from '../http.service'
@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {
  users;
  data = 'hey';

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.pushBill()
  }

  pushBill(bill?) {
    this.httpService.getBill().subscribe(info => {
      // console.log(info,'data')
      this.users = info;
      console.log(Object.keys(info[0]));
      // console.log(Object.values[info[0]])
    })
  }

  
}
