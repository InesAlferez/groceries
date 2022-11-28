"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, alertCtrl, dataService, inputDialogService, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.inputDialogService = inputDialogService;
        this.socialSharing = socialSharing;
        this.title = "Grocery";
        this.items = [];
        dataService.dataChanged$.subscribe(function (dataChanged) {
            _this.loadItems();
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadItems();
    };
    HomePage.prototype.loadItems = function () {
        var _this = this;
        this.dataService.getItems()
            .subscribe(function (items) { return _this.items = items; }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.removeItem = function (id) {
        this.dataService.removeItem(id);
    };
    HomePage.prototype.shareItem = function (item, index) {
        console.log("Sharing Item - ", item, index);
        var toast = this.toastCtrl.create({
            message: 'Sharing Item - ' + index + " ...",
            duration: 3000
        });
        toast.present();
        var message = "Grocery Item - Name: " + item.name + " - Quantity: " + item.quantity;
        var subject = "Shared via Groceries app";
        this.socialSharing.share(message, subject).then(function () {
            // Sharing via email is possible
            console.log("Shared successfully!");
        })["catch"](function (error) {
            console.error("Error while sharing ", error);
        });
    };
    HomePage.prototype.editItem = function (item, index) {
        console.log("Edit Item - ", item, index);
        var toast = this.toastCtrl.create({
            message: 'Editing Item - ' + index + " ...",
            duration: 3000
        });
        toast.present();
        this.inputDialogService.showPrompt(item, index);
    };
    HomePage.prototype.addItem = function () {
        console.log("Adding Item");
        this.inputDialogService.showPrompt();
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;

//# sourceMappingURL=home.js.map
