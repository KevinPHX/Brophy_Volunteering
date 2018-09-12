import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from '@angular/router';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname: String;
  lastname: String;
  grade: String;
  username: String;
  phonenumber: String;
  email: String;
  password: String;
  school: String;
  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  constructor(private validateService: ValidateService, private flashMessages:FlashMessagesService, private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }
onRegisterSubmit(){
  const user={
    firstname: this.firstname,
    lastname: this.lastname,
    grade: this.grade,
    phonenumber: this.phonenumber,
    email: this.email,
    username: this.username,
    password: this.password,
    school: this.school,
    }

    this.authService.findUsers().subscribe(Data => {

      for (var i = 0; i < Data.length; i++){
        if (user.email == Data[i].email){
          this.flashMessages.show("Please use a different email", {cssClass:'alert-danger', timeout:3000});
          this.router.navigate(['/register'])
          return false;
        }
      }
        for (var j = 0; j < Data.length; j++){
        if (user.username == Data[j].username){
          this.flashMessages.show("Please use a different username", {cssClass:'alert-danger', timeout:3000});
          this.router.navigate(['/register'])
          return false;
        }
      }
      if(!this.validateService.validateRegister(user)){
        this.flashMessages.show("Please fill in all fields", {cssClass:'alert-danger', timeout:3000});
        return false;
      }
      //new stuff
      let email = user.email
      let substring = email.substring(email.length - 17, email.length)
      if (substring != "brophybroncos.org" && substring != "@xaviergators.org"){
        this.flashMessages.show("Please use your school email", {cssClass:'alert-danger', timeout:3000});
        return false;
      }
      //end of new stuff

        if(!this.validateService.validateEmail(user.email)){
          this.flashMessages.show("Please use a valid email", {cssClass:'alert-danger', timeout:3000});
          return false;
        } else {
          this.authService.registerUser(user).subscribe(data => {
            if (data){
               this.flashMessages.show("Check your email to verify account", {cssClass:'alert-success', timeout:3000});
               this.router.navigate(['/login'])
             } else {
              this.flashMessages.show("Something went wrong", {cssClass:'alert-danger', timeout:3000});
              this.router.navigate(['/register'])
            }
          });
          this.flashMessages.show("Check your email to verify account", {cssClass:'alert-success', timeout:3000});
          this.router.navigate(['/login'])
          //i = Data.length +1
        }


    })




    //Register User

  }
}
