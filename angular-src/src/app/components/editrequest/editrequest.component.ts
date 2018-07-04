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
  selector: 'app-editrequest',
  templateUrl: './editrequest.component.html',
  styleUrls: ['./editrequest.component.css']
})
export class EditrequestComponent implements OnInit {
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
    private http: Http) {
      this.dataService.myRequest()
          .subscribe(data => {
            console.log(data)
              this.documents = data;
          });
    }

  ngOnInit() {
    this.dataService.myRequest().subscribe(request => {
      this.subject = request[0].subject;
      this.topic = request[0].topic;
      this.addinfo = request[0].addinfo;
    },
    err => {
      console.log(err);
      return false;
    });
  }


  editRequest(){
    const user = {
      subject: this.subject,
      topic: this.topic,
      addinfo: this.addinfo,
    }
  this.dataService.editRequest(user).subscribe(data => {
    console.log("request changed")
  }, err=> {
    console.log(err);
  })
  }

}
