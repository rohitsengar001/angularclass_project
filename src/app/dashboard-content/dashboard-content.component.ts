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
      // console.log(Object.keys(info[3]));
      // console.log(Object.values[info[0]])
    });
  }
  updateBill(form,userId){
    
    // this.status=form.status;
    this.httpService.editBill(form.value).subscribe((info)=>{
      console.log(form);
      let closeBtn=document.getElementById('closeBtn-'+userId);
      closeBtn.click();
    })
  }

  deleteBill(userId,tablerRowID){
    // console.log(form);
    let tableRow=document.getElementById(tablerRowID);
    let closeBtn=document.getElementById("closeBtn-deleteModal-"+userId);
    closeBtn.click();
    tableRow.style.display='none';
    this.httpService.deleteBill(userId).subscribe();
    
  }
} 