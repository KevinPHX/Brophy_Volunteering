import { Component, OnInit, NgModule } from '@angular/core';
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DataService]
})
export class DashboardComponent implements OnInit{
user: Object;
subject:String;
data: Data[];

  constructor(private dataService: DataService, private authService:AuthService, private http: Http, private router:Router) {
    this.dataService.findMatches()
        .subscribe(data => {
          console.log(data)
            this.documents = data;
        });
  }

  

  ngOnInit() {
  }





acceptHelp(username){
this.dataService.acceptHelp(username).subscribe(data => {
  console.log("request accepted")
}, err=> {
  console.log(err);
})
}


}
