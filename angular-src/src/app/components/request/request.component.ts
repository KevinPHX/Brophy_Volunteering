import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { Http } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import {Data} from "../../Data";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  subject:String;
  topic:String;
  addinfo:String;
  Data:Data[];
  constructor(
    private dataService:DataService,
    private authService:AuthService,
    private validateService:ValidateService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private http: Http
  ) {

  }

  ngOnInit() {
  }


  requestHelp(){
    const user = {
      subject: this.subject,
      topic: this.topic,
      addinfo: this.addinfo,
    }
    if (user.subject == undefined || user.topic == undefined){
      this.flashMessage.show("Please fill in the subject and topic fields", {cssClass:'alert-danger', timeout:3000});
      return false;
    }
      this.dataService.requestHelp(user).subscribe(data => {
        console.log("request recorded")
        this.router.navigate(['/dashboard'])
      }, err=> {
        console.log(err);
      })





  }

}
