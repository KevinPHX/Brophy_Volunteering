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
import { FlashMessagesService } from "angular2-flash-messages"


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

  constructor(private dataService: DataService, private authService:AuthService, private http: Http, private router:Router, private flashMessages:FlashMessagesService) {
    this.dataService.findMatches()
        .subscribe(data => {
          console.log(data)
            this.documents = data;
        });
  }



  ngOnInit() {
  }





acceptHelp(id){
  this.dataService.checkRequest(id).subscribe(request => {
    console.log(request[0])
    if (request[0].type == "Completed" || request[0].type == "Cancelled"){
      window.location.reload();
      this.flashMessages.show("This request has already been accepted", {cssClass:'alert-danger', timeout:3000});
      return false;
    } else {
      this.dataService.acceptHelp(id).subscribe(data => {
        console.log("request accepted")
        window.location.reload();
      }, err=> {
        console.log(err);
      })
    }
  })
}


}
