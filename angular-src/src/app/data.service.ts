import { Injectable, OnInit } from '@angular/core';
import { Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService implements OnInit {
  user:Object;
  username:String;
  constructor(private http: Http, private authService: AuthService, private router: Router) {
    console.log('Data Service Initialized...');
    this.user;
    this.username;
  }


  findMatches(){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.username = profile.user.username;
      //this.fetchData(this.username)
      console.log(this.user)
      console.log(this.username);
      this.username;
      return this.http.get("https://localhost:3000/users/match/" + this.username)
        .map(res => res.json())
    })
  }
  rateTutor(email){
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.post('https://localhost:3000/users/ratetutor/' + email, {headers:headers})
    .map(res => res.json());
  }
  disableRating(id){
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.post('https://localhost:3000/users/disablerating/' + id, {headers:headers})
    .map(res => res.json());
  }
  leaderBoard(){
    return this.http.get("https://localhost:3000/users/leaderboard")
      .map(res => res.json())
  }
  unreadRequests(username){
    return this.http.get("https://localhost:3000/users/unreadrequests/" + username)
      .map(res => res.json())
  }
  readRequests(id){
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.post('https://localhost:3000/users/readrequests/' + id, {headers:headers})
    .map(res => res.json());
  }

  requestHelp(user){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.username = profile.user.username;
      //this.fetchData(this.username)
      console.log(this.user)
      console.log(this.username);
      this.username;
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.post('https://localhost:3000/users/request/' + this.username, user, {headers:headers})
      .map(res => res.json());

    })
  }
  acceptHelp(id){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.email = profile.user.email;
      //this.fetchData(this.username)
      console.log(this.user)
      console.log(this.email);
      this.email;
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.post('https://localhost:3000/users/accept/' + id + "/" + this.email, {headers:headers})
      .map(res => res.json());

    })
  }
  cancelHelp(id){
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.post('https://localhost:3000/users/cancel/' + id,{headers:headers})
    .map(res => res.json());
  }
  editRequest(id, user){
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.post('https://localhost:3000/users/editrequest/' + id, user, {headers:headers})
    .map(res => res.json());
    // return this.authService.getProfile().flatMap(profile => {
    //   this.user = profile.user;
    //   this.username = profile.user.username;
    //   //this.fetchData(this.username)
    //   console.log(this.user)
    //   console.log(this.username);
    //   this.username;
    //   let headers = new Headers();
    //   headers.append("Content-Type", 'application/json');
    //   return this.http.post('https://localhost:3000/users/editrequest/' + this.username, user, {headers:headers})
    //   .map(res => res.json());
    // })
  }
  myRequest(){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.username = profile.user.username;
      //this.fetchData(this.username)
      console.log(this.user)
      console.log(this.username);
      this.username;
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.get('https://localhost:3000/users/myrequest/' + this.username, {headers:headers})
      .map(res => res.json());

    })
  }
  myPastRequests(){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.username = profile.user.username;
      //this.fetchData(this.username)
      console.log(this.user)
      console.log(this.username);
      this.username;
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.get('https://localhost:3000/users/mypastrequests/' + this.username, {headers:headers})
      .map(res => res.json());

    })
  }
  myAcceptedRequests(){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.username = profile.user.username;
      //this.fetchData(this.username)
      console.log(this.user)
      console.log(this.username);
      this.username;
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.get('https://localhost:3000/users/myacceptedrequests/' + this.username, {headers:headers})
      .map(res => res.json());

    })
  }
   ngOnInit() {
     this.requestHelp().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
     this.acceptHelp().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
     this.cancelHelp().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
     this.myRequest().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
     this.myPastRequests().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
     this.myAcceptedRequests().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
   }


   }
