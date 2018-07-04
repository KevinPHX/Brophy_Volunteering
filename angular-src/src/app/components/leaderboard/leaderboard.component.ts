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
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
data: Data[];
  constructor(private dataService: DataService, private authService:AuthService, private http: Http, private router:Router) {
    this.dataService.leaderBoard()
        .subscribe(data => {
          console.log(data)
            this.documents = data;
        });
  }

  ngOnInit() {
  }
}
