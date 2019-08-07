import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DataService} from "../../data.service";
import {Data} from "../../Data";
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
data: Data[];
count: Number;
  constructor(private dataService: DataService, private authService:AuthService, private http: Http, private router:Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      console.log(profile.user.username)
      if (profile.user.username == 'kyin20') {
        this.authService.findUsers().subscribe(data => {
          this.documents = data
        })
      } else {
        this.router.navigate(['/'])
      }
    })
  }
  godButtonClick(){
    this.dataService.godButton().subscribe(data => {
      if (data) {
        window.location.reload();
      }
    }, err=> {
      console.log(err);
    })
    window.location.reload();
  }


}
