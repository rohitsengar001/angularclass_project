import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
})
export class DashboardContentComponent implements OnInit {
  users;
  status;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getBill();
  }

  //get api call 
  getBill(bill?) {
    this.httpService.getBill().subscribe((info) => {
      // console.log(info,'data')
      this.users = info;
      console.log(Object.keys(info[3]));
      // console.log(Object.values[info[0]])
    });
  }
  updateBill(form){
    console.log(form);
    // this.status=form.status;
    this.httpService.editBill(form).subscribe((info)=>{
      // form.reset();
    })
  }
} 