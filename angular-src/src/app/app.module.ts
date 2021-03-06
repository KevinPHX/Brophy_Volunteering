import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { AgmCoreModule } from '@agm/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AccordionModule} from "ng2-accordion";
import {ModalModule} from "ng2-modal";
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service"
import { FlashMessagesModule } from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { DataService } from "./data.service";
import { UpdateComponent } from './components/update/update.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import { RequestComponent } from './components/request/request.component';
import { MyrequestComponent } from './components/myrequest/myrequest.component';
import { MypastrequestsComponent } from './components/mypastrequests/mypastrequests.component';
import { MyacceptedrequestsComponent } from './components/myacceptedrequests/myacceptedrequests.component';
import { EditrequestComponent } from './components/editrequest/editrequest.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { AdministratorComponent } from './components/administrator/administrator.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'update', component: UpdateComponent, canActivate:[AuthGuard]},
  {path:'forgot', component: ForgotComponent},
  {path:'reset/:token', component: ResetComponent},
  {path:'request', component: RequestComponent, canActivate:[AuthGuard]},
  {path:'myacceptedrequests', component: MyacceptedrequestsComponent, canActivate:[AuthGuard]},
  {path:'myrequest', component: MyrequestComponent, canActivate:[AuthGuard]},
  {path:'mypastrequests', component: MypastrequestsComponent, canActivate:[AuthGuard]},
  {path:'editrequest/:id', component: EditrequestComponent, canActivate:[AuthGuard]},
  {path:'leaderboard', component: LeaderboardComponent},
  {path:'administrator', component: AdministratorComponent, canActivate:[AuthGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    UpdateComponent,
    ForgotComponent,
    ResetComponent,
    RequestComponent,
    MyrequestComponent,
    MypastrequestsComponent,
    MyacceptedrequestsComponent,
    EditrequestComponent,
    LeaderboardComponent,
    AdministratorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    Ng2SearchPipeModule,
    AccordionModule,
    ModalModule,
    PasswordStrengthBarModule,
  ],
  providers: [ValidateService, AuthService, AuthGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
