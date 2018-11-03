import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {ModalModule} from "ng2-modal";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  username:String;
  _id:String;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.username = profile.user.username;
      this.id = profile.user._id;
      console.log(this.id);
    },
    err => {
      console.log(err);
      return false;
    });
  }
  deleteUser(id){
    this.authService.deleteUser(id).subscribe(data => {
      console.log("account deleted")
      this.authService.logout();
      this.router.navigate(['/']);
      return false
    }, err=> {
      console.log(err);
    })
  }
}
