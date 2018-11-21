import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{DataService} from "../../data.service";
import {Data} from "../../Data";
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AccordionModule} from "ng2-accordion";
import {ModalModule} from "ng2-modal";

@Component({
  selector: 'app-myacceptedrequests',
  templateUrl: './myacceptedrequests.component.html',
  styleUrls: ['./myacceptedrequests.component.css']
})
export class MyacceptedrequestsComponent implements OnInit {
data: Data[];
  constructor(private dataService: DataService, private authService:AuthService, private http: Http, private router:Router) {
    this.dataService.myAcceptedRequests()
        .subscribe(data => {
          console.log(data)
            this.documents = data;
        });

  }

  ngOnInit() {
    this.dataService.acceptedRequestsCount().subscribe(data => {
      if (data > 0){
        this.count = data
    }
    })
  }



}
