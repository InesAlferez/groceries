"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GroceriesServiceProvider = /** @class */ (function () {
    function GroceriesServiceProvider() {
        this.items = [];
        this.baseURL = "http://localhost:8080";
        console.log('Hello GroceriesServiceProvider Provider');
        this.dataChangeSubject = new rxjs_1.Subject();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
    }
    GroceriesServiceProvider.prototype.getItems = function () {
        return this.http.get(this.baseURL + '/api/groceries').pipe();
        operators_1.map(this.extractData),
            operators_1.catchError(this.handleError);
        ;
    };
    GroceriesServiceProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    GroceriesServiceProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error)
            instaceof;
        Response;
        {
            errMsg = '${error.status} - ${error.statusText || ';
            '} ${err}';
        }
        {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable["throw"](errMsg);
    };
    GroceriesServiceProvider.prototype.removeItem = function (id) {
        var _this = this;
        console.log("#### Remove Item - id = ", id);
        this.http["delete"](this.baseURL + '/api/groceries/' + id).subscribe(function (res) {
            _this.items = res;
            _this.dataChangeSubject.next(true);
        });
    };
    GroceriesServiceProvider.prototype.addItem = function (item) {
        var _this = this;
        this.http.post(this.baseURL + '/api/groceries', item).subscribe(function (res) {
            _this.items = res;
            _this.dataChangeSubject.next(true);
        });
    };
    GroceriesServiceProvider.prototype.editItem = function (item, index) {
        var _this = this;
        console.log("Editing item = ", item);
        this.http.put(this.baseURL + '/api/groceries/' + item._id, item).subscribe(function (res) {
            _this.items = res;
            _this.dataChangeSubject.next(true);
        });
    };
    GroceriesServiceProvider = __decorate([
        core_1.Injectable()
    ], GroceriesServiceProvider);
    return GroceriesServiceProvider;
}());
exports.GroceriesServiceProvider = GroceriesServiceProvider;

//# sourceMappingURL=groceries-service.js.map
