import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{DataService} from "../../data.service";
import {Data} from "../../Data";
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-myrequest',
  templateUrl: './myrequest.component.html',
  styleUrls: ['./myrequest.component.css']
})
export class MyrequestComponent implements OnInit {
  data: Data[];
    constructor(private dataService: DataService, private authService:AuthService, private http: Http, private router:Router) {
      this.dataService.myRequest()
          .subscribe(data => {
            console.log(data)
              this.documents = data;
          });
    }


  ngOnInit() {
  }

  
  cancelHelp(){
  this.dataService.cancelHelp().subscribe(data => {
    console.log("request cancelled")
  }, err=> {
    console.log(err);
  })
  }
}
