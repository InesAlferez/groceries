"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ionic_angular_1 = require("ionic-angular");
var app_component_1 = require("./app.component");
var about_1 = require("../pages/about/about");
var contact_1 = require("../pages/contact/contact");
var home_1 = require("../pages/home/home");
var tabs_1 = require("../pages/tabs/tabs");
var status_bar_1 = require("@ionic-native/status-bar");
var splash_screen_1 = require("@ionic-native/splash-screen");
var groceries_service_1 = require("../providers/groceries-service/groceries-service");
var input_dialog_service_1 = require("../providers/input-dialog-service/input-dialog-service");
var social_sharing_1 = require("@ionic-native/social-sharing");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                about_1.AboutPage,
                contact_1.ContactPage,
                home_1.HomePage,
                tabs_1.TabsPage
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp)
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                about_1.AboutPage,
                contact_1.ContactPage,
                home_1.HomePage,
                tabs_1.TabsPage
            ],
            providers: [
                status_bar_1.StatusBar,
                splash_screen_1.SplashScreen,
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
                groceries_service_1.GroceriesServiceProvider,
                input_dialog_service_1.InputDialogServiceProvider,
                social_sharing_1.SocialSharing
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
