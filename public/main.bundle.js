webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class='container'>\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_accordion__ = __webpack_require__("../../../../ng2-accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar__ = __webpack_require__("../../../../ng2-password-strength-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_update_update_component__ = __webpack_require__("../../../../../src/app/components/update/update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_forgot_forgot_component__ = __webpack_require__("../../../../../src/app/components/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_reset_reset_component__ = __webpack_require__("../../../../../src/app/components/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_request_request_component__ = __webpack_require__("../../../../../src/app/components/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_myrequest_myrequest_component__ = __webpack_require__("../../../../../src/app/components/myrequest/myrequest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_mypastrequests_mypastrequests_component__ = __webpack_require__("../../../../../src/app/components/mypastrequests/mypastrequests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_myacceptedrequests_myacceptedrequests_component__ = __webpack_require__("../../../../../src/app/components/myacceptedrequests/myacceptedrequests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_editrequest_editrequest_component__ = __webpack_require__("../../../../../src/app/components/editrequest/editrequest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_leaderboard_leaderboard_component__ = __webpack_require__("../../../../../src/app/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_administrator_administrator_component__ = __webpack_require__("../../../../../src/app/components/administrator/administrator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'update', component: __WEBPACK_IMPORTED_MODULE_22__components_update_update_component__["a" /* UpdateComponent */] },
    { path: 'forgot', component: __WEBPACK_IMPORTED_MODULE_23__components_forgot_forgot_component__["a" /* ForgotComponent */] },
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_24__components_reset_reset_component__["a" /* ResetComponent */] },
    { path: 'request', component: __WEBPACK_IMPORTED_MODULE_25__components_request_request_component__["a" /* RequestComponent */] },
    { path: 'myacceptedrequests', component: __WEBPACK_IMPORTED_MODULE_28__components_myacceptedrequests_myacceptedrequests_component__["a" /* MyacceptedrequestsComponent */] },
    { path: 'myrequest', component: __WEBPACK_IMPORTED_MODULE_26__components_myrequest_myrequest_component__["a" /* MyrequestComponent */] },
    { path: 'mypastrequests', component: __WEBPACK_IMPORTED_MODULE_27__components_mypastrequests_mypastrequests_component__["a" /* MypastrequestsComponent */] },
    { path: 'editrequest/:id', component: __WEBPACK_IMPORTED_MODULE_29__components_editrequest_editrequest_component__["a" /* EditrequestComponent */] },
    { path: 'leaderboard', component: __WEBPACK_IMPORTED_MODULE_30__components_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */] },
    { path: 'administrator', component: __WEBPACK_IMPORTED_MODULE_31__components_administrator_administrator_component__["a" /* AdministratorComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_update_update_component__["a" /* UpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_forgot_forgot_component__["a" /* ForgotComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_reset_reset_component__["a" /* ResetComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_request_request_component__["a" /* RequestComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_myrequest_myrequest_component__["a" /* MyrequestComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_mypastrequests_mypastrequests_component__["a" /* MypastrequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_myacceptedrequests_myacceptedrequests_component__["a" /* MyacceptedrequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_editrequest_editrequest_component__["a" /* EditrequestComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_administrator_administrator_component__["a" /* AdministratorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyD_psTAXcXV9eR4FzF_BFe59jDFMAbVM5k'
                }),
                __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_password_strength_bar__["PasswordStrengthBarModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/administrator/administrator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/administrator/administrator.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd {\n    border-bottom: 1px solid #000000;\n    text-align: left;\n    padding: 8px;\n    width: 33%;\n}\n\nth {\n  text-align: left;\n  padding: 8px;\n  width: 33%;\n}\n\n\n\n</style>\n<h2 class='page-header'>Leaderboard</h2>\n<div class=\"data-list\">\n  <table>\n    <tr>\n      <th><h3>Name</h3></th>\n      <th><h3>Grade</h3></th>\n      <th><h3>Requests Accepted</h3></th>\n    </tr>\n  </table>\n  <div *ngFor=\"let docs of documents\">\n    <table>\n    <tr>\n      <td><h4>{{docs.firstname}} {{docs.lastname}}</h4></td>\n      <td><h4>{{docs.grade}}</h4></td>\n      <td><h4>{{docs.requests}}</h4></td>\n    </tr>\n  </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/administrator/administrator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdministratorComponent = /** @class */ (function () {
    function AdministratorComponent(dataService, authService, http, router) {
        this.dataService = dataService;
        this.authService = authService;
        this.http = http;
        this.router = router;
    }
    AdministratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.findUsers().subscribe(function (data) {
            _this.documents = data;
        });
    };
    AdministratorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-administrator',
            template: __webpack_require__("../../../../../src/app/components/administrator/administrator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/administrator/administrator.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
    ], AdministratorComponent);
    return AdministratorComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/administrator.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n      height: 800px;\n    }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n.accordion {\n    background-color: #eee;\n    color: #444;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n    transition: 0.4s;\n}\n\n.active, .accordion:hover {\n    background-color: #ccc;\n}\n\n.panel {\n    padding: 0 18px;\n    display: none;\n    background-color: white;\n    overflow: hidden;\n}\n.search{\n  padding: 8px;\n  float: right;\n}\n\n.col-xs-2{\n  border-right: 1px solid #dddddd;\n}\n</style>\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<script>\n$(document).ready(function(){\n    $(\"searchbutton\").click(function(){\n        $(\"searchbar\").show();\n    });\n});\n</script>\n<h2 class='page-header'>Dashboard</h2>\n<div class=\"data-list\">\n\n    <div class=\"col-xs-2\">\n        <h5>I Can Help</h5>\n        <a href=\"/dashboard\"><strong>Pending Requests</strong></a>\n          <br><br>\n        <a href=\"/myacceptedrequests\">Accepted Requests</a>\n          <br><br>\n        <h5>I Need Help</h5>\n      <a href=\"/myrequest\">My Pending Request</a>\n        <br><br>\n      <a href=\"/mypastrequests\">My Past Requests</a>\n        <br><br>\n        <a class='btn btn-primary' [routerLink]=\"['/request']\" value = \"Request\">Request A Tutor</a>\n          <br><br>\n\n    </div>\n    <div class = \"col-xs-10\">\n      <h3>Pending Requests</h3>\n      <div class = \"search\">\n        <span class=\"glyphicon glyphicon-search\"></span><input type=\"text\" [(ngModel)]=\"term\">\n      </div>\n      <br><br>\n      <br><br>\n      <div *ngFor=\"let docs of documents |filter:term\">\n        <!-- regular accordion -->\n    <accordion>\n        <accordion-group heading= \"{{docs.timerequest}} Subject: {{docs.subject}}     Topic: {{docs.topic}}      Name: {{docs.tutoreename}}\">\n          <h4>Additional Information: {{docs.addinfo}}</h4>\n          <h4>Email: {{docs.tutoreeemail}} </h4>\n          <h4>Phone Number: {{docs.tutoreephonenumber}}</h4>\n          <button (click)=\"myModal.open()\"><h4>Accept Request</h4></button>\n          <modal #myModal>\n            <modal-content>\n              <h3>Do you wish to accept this request?</h3>\n            </modal-content>\n            <modal-footer>\n              <button class=\"btn btn-primary\" (click)=\"myModal.close()\">No</button><button class=\"btn btn-primary\" (click)=\"myModal.close()\" (click)=\"acceptHelp(docs._id)\" >Yes</button>\n            </modal-footer>\n          </modal>\n        </accordion-group>\n\n    </accordion>\n\n      </div>\n\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataService, authService, http, router) {
        var _this = this;
        this.dataService = dataService;
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.dataService.findMatches()
            .subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.acceptHelp = function (id) {
        this.dataService.acceptHelp(id).subscribe(function (data) {
            console.log("request accepted");
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editrequest/editrequest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editrequest/editrequest.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Edit Request</h2>\n<form (submit)='editRequest()'>\n  <div class='form-group'>\n    <h4>Subject</h4>\n    <input type='text' class='form-control' [(ngModel)]='subject' name='subject'>\n    <h4>Topic</h4>\n    <input type='text' class='form-control' [(ngModel)]='topic' name='topic'>\n    <h4>Additional Information</h4>\n    <input type='text' class='form-control' [(ngModel)]='addinfo' name='addinfo'>\n  </div>\n  <input type='submit' class='btn btn-primary' (click) = \"editRequest()\" value='Submit' [routerLink]=\"['/dashboard']\"><a class='btn btn-default' [routerLink]=\"['/dashboard']\" value = \"Cancel\">Cancel</a>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/editrequest/editrequest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditrequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditrequestComponent = /** @class */ (function () {
    function EditrequestComponent(dataService, authService, validateService, router, flashMessage, http) {
        var _this = this;
        this.dataService = dataService;
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
        this.dataService.myRequest()
            .subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
    }
    EditrequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(13);
        console.log(this.id);
        this.dataService.myRequest().subscribe(function (request) {
            for (var i = 0; i < request.length; i++) {
                if (request[i]._id == _this.id) {
                    _this.subject = request[i].subject;
                    _this.topic = request[i].topic;
                    _this.addinfo = request[i].addinfo;
                }
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditrequestComponent.prototype.editRequest = function () {
        var user = {
            subject: this.subject,
            topic: this.topic,
            addinfo: this.addinfo,
        };
        this.href = this.router.url;
        console.log(this.href);
        this.id = this.href.substring(13);
        console.log(this.id);
        this.dataService.editRequest(this.id, user).subscribe(function (data) {
            console.log("request changed");
        }, function (err) {
            console.log(err);
        });
    };
    EditrequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editrequest',
            template: __webpack_require__("../../../../../src/app/components/editrequest/editrequest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editrequest/editrequest.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _f || Object])
    ], EditrequestComponent);
    return EditrequestComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/editrequest.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Forgot Password</h2>\n<form (submit)='onForgotSubmit()'>\n  <div class='form-group'>\n    <label>Enter Your Email</label>\n    <input type='text' class='form-control' [(ngModel)]='email' name='email'>\n  </div>\n  <input type='submit' class='btn btn-primary' value='Submit' >\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(authService, validateService, router, flashMessage) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.authService.findUsers().subscribe(function (Data) {
            for (var i = 0; i < Data.length; i++) {
                //if (user.email !== Data[i].email){
                console.log(Data[i].email);
            }
        });
    };
    ForgotComponent.prototype.onForgotSubmit = function () {
        var _this = this;
        var user = {
            email: this.email
        };
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
            //console.log(user.email)
        }
        this.authService.findUsers().subscribe(function (Data) {
            for (var i = 0; i < Data.length; i++) {
                console.log(Data[i].email);
                if (user.email == Data[i].email) {
                    _this.authService.forgotUser(user).subscribe(function (data) {
                        if (data) {
                            _this.flashMessage.show("An email has been sent to your account", {
                                cssClass: "alert-success",
                                timeout: 5000
                            });
                            _this.router.navigate(['/login']);
                        }
                    });
                    i = Data.length + 1;
                    console.log(i);
                }
                if (i == Data.length - 1 && user.email !== Data[i].email) {
                    _this.flashMessage.show("Please enter the email you registered with", { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
            }
        });
    };
    ForgotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__("../../../../../src/app/components/forgot/forgot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
    ], ForgotComponent);
    return ForgotComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  margin: 0;\n  padding: 0;\n  background-size:100% 100%;\n  background-repeat: no-repeat;\n}\n.jumbotron {\n  margin:0;\n  /* background-color:#ff5050; */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1>Welcome to Brophy Tutoring</h1>\n    <p>Connecting tutors to those in need</p>\n</div>\n  <div class = \"background\">\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"https://bbk12e1-cdn.myschoolcdn.com/750/photo/orig_photo398924_4464624.jpg?w=1920\" width = 100% >\n      </div>\n\n      <div class=\"item\">\n        <img src = \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Brophy_College_and_Chapel_%281%29.JPG/1200px-Brophy_College_and_Chapel_%281%29.JPG\" width = 100% >\n      </div>\n\n      <div class=\"item\">\n        <img src=\"https://bbk12e1-cdn.myschoolcdn.com/750/photo/orig_photo394658_4420131.jpg?w=1920\" width = 100%>\n      </div>\n\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/leaderboard/leaderboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/leaderboard/leaderboard.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd {\n    border-bottom: 1px solid #000000;\n    text-align: left;\n    padding: 8px;\n    width: 33%;\n}\n\nth {\n  text-align: left;\n  padding: 8px;\n  width: 33%;\n}\n\n\n\n</style>\n<h2 class='page-header'>Leaderboard</h2>\n<div class=\"data-list\">\n  <table>\n    <tr>\n      <th><h3>Rating</h3></th>\n      <th><h3>Name</h3></th>\n      <th><h3>Grade</h3></th>\n    </tr>\n  </table>\n  <div *ngFor=\"let docs of documents\">\n    <table>\n    <tr>\n      <td><h4>{{docs.rating}}</h4></td>\n      <td><h4>{{docs.firstname}} {{docs.lastname}}</h4></td>\n      <td><h4>{{docs.grade}}</h4></td>\n    </tr>\n  </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/leaderboard/leaderboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(dataService, authService, http, router) {
        var _this = this;
        this.dataService = dataService;
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.dataService.leaderBoard()
            .subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
    };
    LeaderboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__("../../../../../src/app/components/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
    ], LeaderboardComponent);
    return LeaderboardComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/leaderboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Login</h2>\n<form (submit)='onLoginSubmit()'>\n  <div class='form-group'>\n    <label>Username</label>\n    <input type='text' class='form-control' [(ngModel)]='username' name='username'>\n  </div>\n  <div class='form-group'>\n    <label>Password</label>\n    <input type='password' class='form-control' [(ngModel)]='password' name='password'>\n  </div>\n  First Time?&nbsp;<a class='' [routerLink]=\"['/register']\">Click Here</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='' [routerLink]=\"['/forgot']\">Forgot Password?</a>\n  <br/>\n  <br/>\n  <input type='submit' class='btn btn-primary' value='Login'>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage, dataService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.dataService = dataService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show("You are now logged in", {
                    cssClass: "alert-success",
                    timeout: 5000
                });
                _this.router.navigate(['/dashboard']);
                _this.dataService.unreadRequests(_this.username).subscribe(function (data) {
                    if (data > 0) {
                        _this.flashMessage.show("You have " + data + " accepted requests. You can see them in My Past Requests", {
                            cssClass: "alert-info",
                            timeout: 5000
                        });
                    }
                });
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: "alert-danger",
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]) === "function" && _d || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/myacceptedrequests/myacceptedrequests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/myacceptedrequests/myacceptedrequests.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n.col-xs-2{\n  border-right: 1px solid #dddddd;\n}\n</style>\n\n\n<h2 class='page-header'>Requests I Have Accepted</h2>\n<div class=\"data-list\">\n\n    <div class=\"col-xs-2\">\n      <h5>I Can Help</h5>\n      <a href=\"/dashboard\">Pending Requests</a>\n        <br><br>\n      <a href=\"/myacceptedrequests\"><strong>Accepted Requests</strong></a>\n        <br><br>\n      <h5>I Need Help</h5>\n    <a href=\"/myrequest\">My Pending Request</a>\n      <br><br>\n    <a href=\"/mypastrequests\">My Past Requests</a>\n      <br><br>\n      <a class='btn btn-primary' [routerLink]=\"['/request']\" value = \"Request\">Request A Tutor</a>\n        <br><br>\n    </div>\n    <div class = \"col-xs-10\">\n      <h4> You have accepted {{count}} requests</h4>\n      <div *ngFor=\"let docs of documents\">\n        <accordion>\n            <accordion-group heading= \"Time of Request: {{docs.timerequest}} Subject: {{docs.subject}}     Topic: {{docs.topic}}      Name of Tutee: {{docs.tutoreename}}\">\n              <h4>Time Request Was Accepted: {{docs.timeaccept}}</h4>\n              <h4>Additional Information: {{docs.addinfo}}</h4>\n              <h4>Email: {{docs.tutoreeemail}} </h4>\n              <h4>Phone Number: {{docs.tutoreephonenumber}}</h4>\n            </accordion-group>\n\n        </accordion>\n\n      </div>\n\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/myacceptedrequests/myacceptedrequests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyacceptedrequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyacceptedrequestsComponent = /** @class */ (function () {
    function MyacceptedrequestsComponent(dataService, authService, http, router) {
        var _this = this;
        this.dataService = dataService;
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.dataService.myAcceptedRequests()
            .subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
    }
    MyacceptedrequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.acceptedRequestsCount().subscribe(function (data) {
            //if (data > 0){
            _this.count = data;
            //}
        });
    };
    MyacceptedrequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myacceptedrequests',
            template: __webpack_require__("../../../../../src/app/components/myacceptedrequests/myacceptedrequests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/myacceptedrequests/myacceptedrequests.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
    ], MyacceptedrequestsComponent);
    return MyacceptedrequestsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/myacceptedrequests.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/mypastrequests/mypastrequests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mypastrequests/mypastrequests.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\n.col-xs-2{\n  border-right: 1px solid #dddddd;\n}\n</style>\n<h2 class='page-header'>My Past Requests</h2>\n\n<div class=\"data-list\">\n  <div class=\"col-xs-2\">\n    <h5>I Can Help</h5>\n    <a href=\"/dashboard\">Pending Requests</a>\n      <br><br>\n    <a href=\"/myacceptedrequests\">Accepted Requests</a>\n      <br><br>\n    <h5>I Need Help</h5>\n  <a href=\"/myrequest\">My Pending Request</a>\n    <br><br>\n  <a href=\"/mypastrequests\"><strong>My Past Requests</strong></a>\n    <br><br>\n    <a class='btn btn-primary' [routerLink]=\"['/request']\" value = \"Request\">Request A Tutor</a>\n      <br><br>\n  </div>\n\n<div class=\"col-xs-10\">\n<div *ngFor=\"let docs of documents\">\n\n  <accordion>\n      <accordion-group  (click) = readRequests(docs._id) heading= \"Time of Request: {{docs.timerequest}}  Subject: {{docs.subject}}     Topic: {{docs.topic}}      Name of Tutor: {{docs.tutorname}}\">\n        <div class = 'col-xs-7'>\n        <h4>Time Request Was Accepted: {{docs.timeaccept}}</h4>\n        <h4>Additional Information: {{docs.addinfo}}</h4>\n        <h4>Email: {{docs.tutoremail}} </h4>\n        <h4>Phone Number: {{docs.tutorphonenumber}}</h4>\n      </div>\n      <div class = 'col-xs-5'>\n            <h4>Do you like {{docs.tutorname}} as a tutor?</h4>\n            <button class=\"btn btn-primary\" (click)=\"refresh()\" (click)=\"rateTutor(docs.tutoremail)\" (click)=\"disableRating(docs._id)\" [disabled] = docs.rated><span class=\"glyphicon glyphicon-thumbs-up\"></span></button>\n      </div>\n      </accordion-group>\n\n  </accordion>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/mypastrequests/mypastrequests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypastrequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MypastrequestsComponent = /** @class */ (function () {
    function MypastrequestsComponent(dataService, authService, http, router) {
        var _this = this;
        this.dataService = dataService;
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.ToggleButton = false;
        this.dataService.myPastRequests()
            .subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
    }
    MypastrequestsComponent.prototype.ngOnInit = function () {
    };
    MypastrequestsComponent.prototype.refresh = function () {
        window.location.reload();
    };
    MypastrequestsComponent.prototype.rateTutor = function (email) {
        this.dataService.rateTutor(email).subscribe(function (data) {
            console.log("tutor rated");
        }, function (err) {
            console.log(err);
        });
    };
    MypastrequestsComponent.prototype.disableRating = function (id) {
        this.dataService.disableRating(id).subscribe(function (data) {
            console.log("rated set to true");
        }, function (err) {
            console.log(err);
        });
    };
    MypastrequestsComponent.prototype.toggleButton = function (rated) {
        if (rated == true) {
            this.ToggleButton = true;
        }
    };
    MypastrequestsComponent.prototype.readRequests = function (id) {
        this.dataService.readRequests(id).subscribe(function (data) {
            console.log("request read");
        }, function (err) {
            console.log(err);
        });
    };
    MypastrequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mypastrequests',
            template: __webpack_require__("../../../../../src/app/components/mypastrequests/mypastrequests.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/mypastrequests/mypastrequests.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
    ], MypastrequestsComponent);
    return MypastrequestsComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/mypastrequests.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/myrequest/myrequest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/myrequest/myrequest.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n.col-xs-2{\n  border-right: 1px solid #dddddd;\n}\n</style>\n\n\n<h2 class='page-header'>My Request</h2>\n<div class=\"data-list\">\n\n    <div class=\"col-xs-2\">\n      <h5>I Can Help</h5>\n      <a href=\"/dashboard\">Pending Requests</a>\n        <br><br>\n      <a href=\"/myacceptedrequests\">Accepted Requests</a>\n        <br><br>\n      <h5>I Need Help</h5>\n    <a href=\"/myrequest\"><strong>My Pending Request</strong></a>\n      <br><br>\n    <a href=\"/mypastrequests\">My Past Requests</a>\n      <br><br>\n      <a class='btn btn-primary' [routerLink]=\"['/request']\" value = \"Request\">Request A Tutor</a>\n        <br><br>\n    </div>\n    <div class = \"col-xs-10\">\n      <div *ngFor=\"let docs of documents\">\n        <ul class='list-group'>\n                <li class='list-group-item'>Name: {{docs.tutoreename}}</li>\n                <li class='list-group-item'>Subject: {{docs.subject}}</li>\n                <li class='list-group-item'>Topic: {{docs.topic}}</li>\n                <li class='list-group-item'>Additional Information: {{docs.addinfo}}</li>\n                <li class='list-group-item'>Email: {{docs.tutoreeemail}}</li>\n                <li class='list-group-item'>Phone Number: {{docs.tutoreephonenumber}}</li>\n                <input type = \"button\" class = 'btn btn-primary' value='Cancel' (click)=\"cancelHelp(docs._id)\" [routerLink]=\"['/dashboard']\"><input type = \"button\" class = 'btn btn-default' value='Edit' [routerLink]=\"['/editrequest/', docs._id]\">\n\n        </ul>\n        <br><br>\n      </div>\n\n\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/myrequest/myrequest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyrequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyrequestComponent = /** @class */ (function () {
    function MyrequestComponent(dataService, authService, http, router) {
        var _this = this;
        this.dataService = dataService;
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.dataService.myRequest()
            .subscribe(function (data) {
            console.log(data);
            _this.documents = data;
        });
    }
    MyrequestComponent.prototype.ngOnInit = function () {
    };
    MyrequestComponent.prototype.cancelHelp = function (id) {
        this.dataService.cancelHelp(id).subscribe(function (data) {
            console.log("request cancelled");
        }, function (err) {
            console.log(err);
        });
    };
    MyrequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myrequest',
            template: __webpack_require__("../../../../../src/app/components/myrequest/myrequest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/myrequest/myrequest.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
    ], MyrequestComponent);
    return MyrequestComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/myrequest.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">Brophy Tutoring</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\n          <!-- <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a [routerLink]=\"['/']\">Brophy Tutoring</a></li>\n          </ul> -->\n          <ul class=\"nav navbar-nav navbar-right\">\n\n              <li *ngIf='authService.loggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n              <li *ngIf='authService.loggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a [routerLink]=\"['/leaderboard']\">Leaderboard</a></li>\n\n\n\n\n\n            <li *ngIf='authService.loggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n            <li *ngIf='!authService.loggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a [routerLink]=\"['/login']\">Login</a></li>\n            <!-- <li *ngIf='!authService.loggedIn()' [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]='{exact:true}'><a [routerLink]=\"['/register']\">Register</a></li> -->\n            <li *ngIf='authService.loggedIn()'><a (click)='onLogoutClick()' href='#'>Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are logged out", { cssClass: "alert-success", timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='user'>\n  <h2 class='page-header'>{{user.firstname}} {{user.lastname}}</h2>\n  <ul class='list-group'>\n    <li class='list-group-item'>School: {{user.school}}</li>\n    <li class='list-group-item'>Grade: {{user.grade}}th</li>\n    <li class='list-group-item'>Username: {{user.username}}</li>\n    <li class='list-group-item'>Email: {{user.email}}</li>\n    <li class='list-group-item'>Phone Number: {{user.phonenumber}}</li>\n    <li class='list-group-item'>Rating: {{user.rating}}</li>\n  </ul>\n\n<a class='btn btn-primary' [routerLink]=\"['/update']\" value = \"Update\">Update</a>   <button class='btn' (click)=\"myModal.open()\"><h4>Delete Account</h4></button>\n  <modal #myModal>\n    <modal-content>\n      <h3>Are you sure you want to delete your account?</h3>\n    </modal-content>\n    <modal-footer>\n      <button class=\"btn btn-primary\" (click)=\"myModal.close()\">No</button><button class=\"btn btn-primary\" (click)=\"myModal.close()\" (click)=\"deleteUser(user._id)\" (click)=\"deleteRequests(user.username)\">Yes</button>\n    </modal-footer>\n  </modal>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dataService, authService, router) {
        this.dataService = dataService;
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
            _this.id = profile.user._id;
            console.log(_this.id);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.authService.deleteUser(id).subscribe(function (data) {
            console.log("account deleted");
            _this.authService.logout();
            _this.router.navigate(['/']);
            return false;
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent.prototype.deleteRequests = function (username) {
        this.dataService.deleteRequests(username).subscribe(function (data) {
            console.log("account requests deleted");
        }, function (err) {
            console.log(err);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Register</h2>\n<form (submit)='onRegisterSubmit()'>\n<div class = \"col-xs-12\">\n  <div class='form-group'>\n    <label>Brophy or Xavier</label><br>\n    <input type='radio' [(ngModel)]='school' name='brophy' value='Brophy' class=\"form-check\">   Brophy\n    <input type='radio' [(ngModel)]='school' name='xavier' value='Xavier' class=\"form-check\">   Xavier\n  </div>\n</div>\n  <br><br>\n  <div class = \"col-xs-5\">\n  <div class='form-group'>\n    <label>First Name</label>\n    <input type='text' [(ngModel)]='firstname' name='firstname' class=\"form-control\">\n  </div>\n</div>\n<div class = \"col-xs-5\">\n  <div class='form-group'>\n    <label>Last Name</label>\n    <input type='text' [(ngModel)]='lastname' name='lastname' class=\"form-control\">\n  </div>\n</div>\n<div class = 'col-xs-2'>\n  <div class='form-group'>\n    <label>Grade</label>\n    <select [(ngModel)]='grade' name='grade' class=\"form-control\">\n      <option value=\"9\">9</option>\n      <option value=\"10\">10</option>\n      <option value=\"11\">11</option>\n      <option value=\"12\">12</option>\n    </select>\n    <!-- <input type='text' [(ngModel)]='grade' name='grade' class=\"form-control\"> -->\n  </div>\n</div>\n<br><br>\n<div class = 'col-xs-6'>\n  <div class='form-group'>\n    <label>Phone Number</label>\n    <input type='text' [(ngModel)]='phonenumber' name='phonenumber' class=\"form-control\">\n  </div>\n</div>\n<div class = 'col-xs-6'>\n  <div class='form-group'>\n    <label>Email</label>\n    <input type= 'text' [(ngModel)]='email' name='email' class='form-control'>\n  </div>\n</div>\n<br><br>\n<div class = 'col-xs-12'>\n  <div class='form-group'>\n    <label>Username</label>\n    <input type= 'text' [(ngModel)]='username' name='username' class='form-control'>\n  </div>\n</div>\n<br><br>\n<div class = 'col-xs-12'>\n  <div class='form-group'>\n    <label>Password</label>\n    <input type= 'password' [(ngModel)]='password' name='password' class='form-control'>\n    <ng2-password-strength-bar\n                [passwordToCheck]=\"password\"\n                [barLabel]=\"barLabel\"\n                [barColors]=\"myColors\">\n            </ng2-password-strength-bar>\n  </div>\n</div>\n  <input type='submit' class = 'btn btn-primary' value='Submit' >\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessages, authService, router) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
        this.barLabel = "Password strength:";
        this.myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            grade: this.grade,
            phonenumber: this.phonenumber,
            email: this.email,
            username: this.username,
            password: this.password,
            school: this.school,
        };
        this.authService.findUsers().subscribe(function (Data) {
            if (!_this.validateService.validateRegister(user)) {
                _this.flashMessages.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            for (var i = 0; i < Data.length; i++) {
                if (user.email == Data[i].email) {
                    _this.flashMessages.show("Please use a different email", { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/register']);
                    return false;
                }
            }
            for (var j = 0; j < Data.length; j++) {
                if (user.username == Data[j].username) {
                    _this.flashMessages.show("Please use a different username", { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/register']);
                    return false;
                }
            }
            //new stuff
            var email = user.email;
            var substring = email.substring(email.length - 17, email.length);
            if (substring != "brophybroncos.org" && substring != "@xaviergators.org") {
                _this.flashMessages.show("Please use your school email", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            //end of new stuff
            if (!_this.validateService.validateEmail(user.email)) {
                _this.flashMessages.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            else {
                _this.authService.registerUser(user).subscribe(function (data) {
                    if (data) {
                        _this.flashMessages.show("Check your email to verify account", { cssClass: 'alert-success', timeout: 3000 });
                        _this.router.navigate(['/login']);
                    }
                    else {
                        _this.flashMessages.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                        _this.router.navigate(['/register']);
                    }
                });
                _this.flashMessages.show("Check your email to verify account", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
                //i = Data.length +1
            }
        });
        //Register User
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/request/request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/request/request.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Request A Tutor</h2>\n<form (submit)='requestHelp()'>\n  <div class='form-group'>\n    <h4>Subject</h4>\n    <input type='text' class='form-control' [(ngModel)]='subject' name='subject' placeholder=\"i.e. Algebra I\">\n    <h4>Topic</h4>\n    <input type='text' class='form-control' [(ngModel)]='topic' name='topic' placeholder=\"i.e. Polynomials\">\n    <h4>Additional Information</h4>\n    <input type='text' class='form-control' [(ngModel)]='addinfo' name='addinfo'>\n  </div>\n  <input type='submit' class='btn btn-primary'  value='Submit'><a class='btn btn-default' [routerLink]=\"['/dashboard']\" value = \"Cancel\">Cancel</a>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/request/request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestComponent = /** @class */ (function () {
    function RequestComponent(dataService, authService, validateService, router, flashMessage, http) {
        this.dataService = dataService;
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
    RequestComponent.prototype.requestHelp = function () {
        var _this = this;
        var user = {
            subject: this.subject,
            topic: this.topic,
            addinfo: this.addinfo,
        };
        if (user.subject == undefined || user.topic == undefined) {
            this.flashMessage.show("Please fill in the subject and topic fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.dataService.requestHelp(user).subscribe(function (data) {
            console.log("request recorded");
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log(err);
        });
    };
    RequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request',
            template: __webpack_require__("../../../../../src/app/components/request/request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/request/request.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _f || Object])
    ], RequestComponent);
    return RequestComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/request.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/reset/reset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class='page-header'>Reset Password</h2>\n<form (submit)='onResetSubmit()'>\n  <div class='form-group'>\n    <label>Enter New Password</label>\n    <input type='password' class='form-control' [(ngModel)]='password' name='password'>\n    <ng2-password-strength-bar\n                [passwordToCheck]=\"password\"\n                [barLabel]=\"barLabel\"\n                [barColors]=\"myColors\">\n            </ng2-password-strength-bar>\n  </div>\n  <input type='submit' class='btn btn-primary' value='Submit'>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetComponent = /** @class */ (function () {
    function ResetComponent(authService, validateService, router, flashMessage, http) {
        this.authService = authService;
        this.validateService = validateService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.http = http;
        this.barLabel = "Password strength:";
        this.myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
    }
    ResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url;
        console.log(this.href);
        this.token = this.href.substring(7, 47);
        console.log(this.token);
        this.authService.findUsers().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (_this.token == data[i].resetPasswordToken) {
                    console.log(data[i]);
                }
            }
        });
    };
    ResetComponent.prototype.onResetSubmit = function () {
        var _this = this;
        this.authService.findUsers().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (_this.token == data[i].resetPasswordToken) {
                    var user = {
                        password: _this.password
                    };
                    _this.href = _this.router.url;
                    console.log(_this.href);
                    _this.token = _this.href.substring(7, 47);
                    console.log(_this.token);
                    _this.authService.resetUser(_this.token, user).subscribe(function (data) {
                        if (data) {
                            _this.flashMessage.show("Your password has been changed", {
                                cssClass: "alert-success",
                                timeout: 5000
                            });
                            _this.router.navigate(['/login']);
                        }
                        else {
                            _this.flashMessage.show("Failure to change password", {
                                cssClass: "alert-success",
                                timeout: 5000
                            });
                            _this.router.navigate(['/reset/' + _this.token]);
                        }
                    });
                }
            }
        });
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__("../../../../../src/app/components/reset/reset.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reset/reset.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _e || Object])
    ], ResetComponent);
    return ResetComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/reset.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"ngOnInit\">\n<div *ngIf='user'>\n<h2 class='page-header'>Update</h2>\n<form (submit)='onUpdateSubmit()'>\n<div class = 'col-xs-12'>\n  <div class='form-group'>\n    <label>Brophy or Xavier</label><br>\n    <input type='radio' [(ngModel)]='school' name='brophy' value='Brophy' class=\"form-check\" >   Brophy\n    <input type='radio' [(ngModel)]='school' name='xavier' value='Xavier' class=\"form-check\">   Xavier\n  </div>\n</div>\n<br><br>\n<div class = 'col-xs-5'>\n  <div class='form-group'>\n    <label>First Name</label>\n    <input type='text' [(ngModel)]='firstname' name='firstname' class=\"form-control\"  >\n  </div>\n</div>\n<div class = 'col-xs-5'>\n  <div class='form-group'>\n    <label>Last Name</label>\n    <input type='text' [(ngModel)]='lastname' name='lastname' class=\"form-control\" >\n  </div>\n</div>\n<div class = 'col-xs-2'>\n  <div class='form-group'>\n    <label>Grade</label>\n    <select [(ngModel)]='grade' name='grade' class=\"form-control\">\n      <option value=\"9\">9</option>\n      <option value=\"10\">10</option>\n      <option value=\"11\">11</option>\n      <option value=\"12\">12</option>\n    </select>\n    <!-- <input type= 'text' [(ngModel)]='grade' name='grade' class='form-control' > -->\n  </div>\n</div>\n<br><br>\n<div class = 'col-xs-6'>\n<div class='form-group'>\n  <label>Phone Number</label>\n  <input type='text' [(ngModel)]='phonenumber' name='phonenumber' class=\"form-control\" >\n</div>\n</div>\n<div class = 'col-xs-6'>\n<div class='form-group'>\n  <label>Email</label>\n  <input type= 'text' [(ngModel)]='email' name='email' class='form-control' disabled>\n</div>\n</div>\n<br><br>\n<div class = 'col-xs-12'>\n  <div class='form-group'>\n    <label>Username</label>\n    <input type= 'text' [(ngModel)]='username' name='username' class='form-control' disabled>\n  </div>\n</div>\n\n\n\n  <input type='submit' class = 'btn btn-primary' value='Submit' (click)=\"deleteUser(user._id)\"> <a class='btn btn-default' [routerLink]=\"['/profile']\" value = \"Cancel\">Cancel</a>\n"

/***/ }),

/***/ "../../../../../src/app/components/update/update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(validateService, flashMessages, authService, router, http) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
        this.http = http;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.school = profile.user.school;
            _this.firstname = profile.user.firstname;
            _this.lastname = profile.user.lastname;
            _this.grade = profile.user.grade;
            _this.username = profile.user.username;
            _this.phonenumber = profile.user.phonenumber;
            _this.email = profile.user.email;
            _this.password = profile.user.password;
            _this.rating = profile.user.rating;
            _this.requests = profile.user.requests;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    UpdateComponent.prototype.deleteUser = function (id) {
        var user = this.user;
        this.authService.deleteUser(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < user.length; i++) {
                    if (user[i].id == id) {
                        user.splice(i, 1);
                    }
                }
            }
        });
    };
    UpdateComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        var user = {
            firstname: this.firstname,
            lastname: this.lastname,
            grade: this.grade,
            phonenumber: this.phonenumber,
            email: this.email,
            username: this.username,
            password: this.password,
            school: this.school,
            rating: this.rating,
            requests: this.requests
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessages.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessages.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register New User
        this.authService.updateUser(user).subscribe(function (data) {
            if (data) {
                _this.flashMessages.show("You are now updated", { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.logout();
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessages.show("Something went wrong", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/update']);
            }
        });
    };
    UpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update',
            template: __webpack_require__("../../../../../src/app/components/update/update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _e || Object])
    ], UpdateComponent);
    return UpdateComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/update.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        console.log('Data Service Initialized...');
        this.user;
        this.username;
    }
    DataService.prototype.findMatches = function () {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
            //this.fetchData(this.username)
            console.log(_this.user);
            console.log(_this.username);
            _this.username;
            return _this.http.get("http://localhost:3000/users/match/" + _this.username)
                .map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.rateTutor = function (email) {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/ratetutor/' + email, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.disableRating = function (id) {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/disablerating/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.leaderBoard = function () {
        return this.http.get("http://localhost:3000/users/leaderboard")
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.unreadRequests = function (username) {
        return this.http.get("http://localhost:3000/users/unreadrequests/" + username)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.acceptedRequestsCount = function () {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
            //this.fetchData(this.username)
            console.log(_this.user);
            console.log(_this.username);
            _this.username;
            return _this.http.get("http://localhost:3000/users/acceptedrequestscount/" + _this.username)
                .map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.userAcceptedRequestsCount = function (username) {
        return this.http.get("http://localhost:3000/users/acceptedrequestscount/" + username)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.readRequests = function (id) {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/readrequests/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.requestHelp = function (user) {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
            //this.fetchData(this.username)
            console.log(_this.user);
            console.log(_this.username);
            _this.username;
            var headers = new Headers();
            headers.append("Content-Type", 'application/json');
            return _this.http.post('http://localhost:3000/users/request/' + _this.username, user, { headers: headers })
                .map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.acceptHelp = function (id) {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.email = profile.user.email;
            //this.fetchData(this.username)
            console.log(_this.user);
            console.log(_this.email);
            _this.email;
            var headers = new Headers();
            headers.append("Content-Type", 'application/json');
            return _this.http.post('http://localhost:3000/users/accept/' + id + "/" + _this.email, { headers: headers })
                .map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.cancelHelp = function (id) {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/cancel/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.editRequest = function (id, user) {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/editrequest/' + id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.deleteRequests = function (username) {
        return this.http.delete('http://localhost:3000/users/deleterequests/' + username)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.myRequest = function () {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
            //this.fetchData(this.username)
            console.log(_this.user);
            console.log(_this.username);
            _this.username;
            var headers = new Headers();
            headers.append("Content-Type", 'application/json');
            return _this.http.get('http://localhost:3000/users/myrequest/' + _this.username, { headers: headers })
                .map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.myPastRequests = function () {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
            //this.fetchData(this.username)
            console.log(_this.user);
            console.log(_this.username);
            _this.username;
            var headers = new Headers();
            headers.append("Content-Type", 'application/json');
            return _this.http.get('http://localhost:3000/users/mypastrequests/' + _this.username, { headers: headers })
                .map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.myAcceptedRequests = function () {
        var _this = this;
        return this.authService.getProfile().flatMap(function (profile) {
            _this.user = profile.user;
            _this.username = profile.user.username;
            //this.fetchData(this.username)
            console.log(_this.user);
            console.log(_this.username);
            _this.username;
            var headers = new Headers();
            headers.append("Content-Type", 'application/json');
            return _this.http.get('http://localhost:3000/users/myacceptedrequests/' + _this.username, { headers: headers })
                .map(function (res) { return res.json(); });
        });
    };
    DataService.prototype.ngOnInit = function () {
        this.requestHelp().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.acceptHelp().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.cancelHelp().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.myRequest().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.myPastRequests().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.myAcceptedRequests().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
        this.acceptedRequestsCount().subscribe(function (profile) {
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object])
    ], DataService);
    return DataService;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/data.service.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/update', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (id) {
        return this.http.delete('http://localhost:3000/users/delete/' + id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.forgotUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/forgot', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.resetUser = function (token, user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append("Content-Type", 'application/json');
        return this.http.post('http://localhost:3000/users/reset/' + token, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.findUsers = function () {
        return this.http.get("http://localhost:3000/users/contacts")
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append("Authorization", this.authToken);
        headers.append("Content-Type", 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
        console.log(token);
    };
    AuthService.prototype.loggedIn = function () {
        //console.log(tokenNotExpired());
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.firstname == undefined || user.lastname == undefined || user.grade == undefined || user.email == undefined || user.username == undefined || user.phonenumber == undefined || user.password == undefined || user.school == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateUpdate = function (user) {
        if (user.firstname == undefined || user.lastname == undefined || user.grade == undefined || user.email == undefined || user.username == undefined || user.phonenumber == undefined || user.passwword == undefined || user.school == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/kevinyin/Documents/Programming/meanauthapp_3/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map