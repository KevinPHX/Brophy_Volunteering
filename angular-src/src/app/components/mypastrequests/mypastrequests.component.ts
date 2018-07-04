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
  selector: 'app-mypastrequests',
  templateUrl: './mypastrequests.component.html',
  styleUrls: ['./mypastrequests.component.css']
})
export class MypastrequestsComponent implements OnInit {
data: Data[];
ToggleButton: boolean = false;
  constructor(private dataService: DataService, private authService:AuthService, private http: Http, private router:Router) {
    this.dataService.myPastRequests()
        .subscribe(data => {
          console.log(data)
            this.documents = data;
        });
  }

  ngOnInit() {
  }
  refresh(): void {
    window.location.reload();
  }

  rateTutor(email){
  this.dataService.rateTutor(email).subscribe(data => {
    console.log("tutor rated")
  }, err=> {
    console.log(err);
  })
  }

  disableRating(id){
    this.dataService.disableRating(id).subscribe(data => {
      console.log("rated set to true")
    }, err=> {
      console.log(err);
    })
  }

  toggleButton(rated){
    if (rated == true){
      this.ToggleButton = true;
    }
  }

  readRequests(id){
    this.dataService.readRequests(id).subscribe(data => {
      console.log("request read")
    }, err=> {
      console.log(err);
    })
  }

  // showUnread(){
  //
  // }

}
