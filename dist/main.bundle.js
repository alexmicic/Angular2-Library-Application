webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.usersUrl = 'api/users/';
    }
    UserService.prototype.getUsers = function () {
        return this.authHttp.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        return this.authHttp.get(this.usersUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getUserRents = function (id) {
        return this.authHttp.get(this.usersUrl + id + '/rents')
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.createUser = function (user) {
        return this.authHttp.post(this.usersUrl, user)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.authHttp.delete(this.usersUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.authHttp.put(this.usersUrl + id, user)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });

var Auth = (function () {
    function Auth() {
    }
    Auth.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["tokenNotExpired"])();
    };
    Auth.prototype.isAdmin = function () {
        var isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin !== null) {
            return isAdmin;
        }
        else {
            return false;
        }
    };
    Auth.prototype.getUserId = function () {
        var userId = localStorage.getItem('userId');
        if (userId !== null) {
            return userId;
        }
        else {
            return '';
        }
    };
    return Auth;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookService = (function () {
    function BookService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.usersUrl = 'api/books/';
    }
    BookService.prototype.getBooks = function () {
        return this.authHttp.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BookService.prototype.getBook = function (id) {
        return this.authHttp.get(this.usersUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BookService.prototype.createBook = function (book) {
        return this.authHttp.post(this.usersUrl, book)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BookService.prototype.deleteBook = function (id) {
        return this.authHttp.delete(this.usersUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BookService.prototype.updateBook = function (id, book) {
        return this.authHttp.put(this.usersUrl + id, book)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BookService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BookService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
], BookService);

var _a, _b;
//# sourceMappingURL=book.service.js.map

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Book; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Book = (function () {
    function Book() {
    }
    return Book;
}());

var Utils = (function () {
    function Utils() {
        this.genres = [
            'Science fiction', 'Satire', 'Drama', 'Action and Adventure', 'Romance', 'Mystery', 'Horror', 'Self help', 'Health', 'Guide',
            'Travel', 'Children`s', 'Religion, Spirituality & New Age', 'Science', 'History', 'Math', 'Anthology', 'Poetry', 'Encyclopedias',
            'Dictionaries', 'Comics', 'Art', 'Cookbooks', 'Diaries', 'Journals', 'Prayer books', 'Series', 'Trilogy', 'Biographies',
            'Autobiographies', 'Fantasy'
        ];
    }
    Utils.prototype.generateYears = function () {
        var currentYear = new Date().getFullYear(), years = [], startYear = 1900;
        while (startYear <= currentYear) {
            years.push(startYear++);
        }
        return years;
    };
    return Utils;
}());

var BookComponent = (function () {
    function BookComponent(bookService, route, router) {
        this.bookService = bookService;
        this.route = route;
        this.router = router;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // read id from route
            _this.id = params['id'];
            // load data
            _this.getBook();
        });
        var utils = new Utils;
        this.genres = utils.genres;
        this.years = utils.generateYears();
    };
    BookComponent.prototype.getBook = function () {
        var _this = this;
        this.bookService.getBook(this.id)
            .subscribe(function (book) { return _this.book = book; }, function (error) { return _this.errorMessage = error; });
    };
    BookComponent.prototype.back = function () {
        this.router.navigate(['/books/']);
    };
    BookComponent.prototype.save = function () {
        var _this = this;
        this.bookService.updateBook(this.id, this.book)
            .subscribe(function (next) { return _this.back(); }, function (error) { return _this.errorMessage = error; });
    };
    return BookComponent;
}());
BookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book',
        template: __webpack_require__(198),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BookComponent);

var _a, _b, _c;
//# sourceMappingURL=book.component.js.map

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Rent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Rent = (function () {
    function Rent() {
    }
    return Rent;
}());

var RentComponent = (function () {
    function RentComponent() {
    }
    RentComponent.prototype.ngOnInit = function () {
    };
    return RentComponent;
}());
RentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rent',
        template: __webpack_require__(205),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [])
], RentComponent);

//# sourceMappingURL=rent.component.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RentService = (function () {
    function RentService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.usersUrl = 'api/rents/';
    }
    RentService.prototype.getRents = function () {
        return this.authHttp.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RentService.prototype.getRent = function (id) {
        return this.authHttp.get(this.usersUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RentService.prototype.createRent = function (rent) {
        return this.authHttp.post(this.usersUrl, rent)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RentService.prototype.updateRent = function (id, rent) {
        return this.authHttp.put(this.usersUrl + id, rent)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RentService.prototype.deleteRent = function (id) {
        return this.authHttp.delete(this.usersUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RentService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    RentService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return RentService;
}());
RentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"]) === "function" && _b || Object])
], RentService);

var _a, _b;
//# sourceMappingURL=rent.service.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = (function () {
    function User() {
    }
    return User;
}());

var UserComponent = (function () {
    function UserComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // read id from route
            _this.id = params['id'];
            // load data
            _this.getUser();
        });
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.id)
            .subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
    };
    UserComponent.prototype.back = function () {
        this.router.navigate(['/users/']);
    };
    UserComponent.prototype.save = function () {
        var _this = this;
        this.userService.updateUser(this.id, this.user)
            .subscribe(function (next) { return _this.back(); }, function (error) { return _this.errorMessage = error; });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(208),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthGuardAdmin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var AuthGuardAdmin = (function () {
    function AuthGuardAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        if (this.auth.isAdmin() === 'true') {
            return true;
        }
        else {
            this.router.navigate(['landing']);
            return false;
        }
    };
    return AuthGuardAdmin;
}());
AuthGuardAdmin = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* Auth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AuthGuardAdmin);

var _a, _b, _c, _d;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_component__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookAddComponent = (function () {
    function BookAddComponent(bookService, route, router) {
        this.bookService = bookService;
        this.route = route;
        this.router = router;
    }
    BookAddComponent.prototype.ngOnInit = function () {
        var utils = new __WEBPACK_IMPORTED_MODULE_3__book_component__["b" /* Utils */];
        this.genres = utils.genres;
        this.years = utils.generateYears();
        this.book = new __WEBPACK_IMPORTED_MODULE_3__book_component__["c" /* Book */];
    };
    BookAddComponent.prototype.back = function () {
        this.router.navigate(['/books/']);
    };
    BookAddComponent.prototype.save = function () {
        var _this = this;
        this.bookService.createBook(this.book)
            .subscribe(function (next) { return _this.back(); }, function (error) { return _this.errorMessage = error; });
    };
    return BookAddComponent;
}());
BookAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book-add',
        template: __webpack_require__(196),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BookAddComponent);

var _a, _b, _c;
//# sourceMappingURL=book-add.component.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookListComponent = (function () {
    function BookListComponent(bookService, titleService, route, router) {
        this.bookService = bookService;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.getBooks();
        this.titleService.setTitle('Library - Books');
    };
    BookListComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
    };
    BookListComponent.prototype.activateBook = function (event, id) {
        if (event.target.nodeName !== 'BUTTON' && event.target.className !== 'action') {
            this.router.navigate(['/books/' + id]);
        }
    };
    BookListComponent.prototype.add = function () {
        this.router.navigate(['/books/add']);
    };
    BookListComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this.bookService.deleteBook(id)
            .subscribe(function (rents) { return _this.getBooks(); }, function (error) { return _this.errorMessage = error; });
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book-list',
        template: __webpack_require__(197),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], BookListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=book-list.component.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingComponent = (function () {
    function LandingComponent(titleService, route, router, userService, auth) {
        this.titleService = titleService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.auth = auth;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Library');
        if (this.auth.isAdmin() === 'false') {
            // read id from route
            this.id = this.auth.getUserId();
            // load data
            this.getUserRents();
        }
    };
    LandingComponent.prototype.getUserRents = function () {
        var _this = this;
        this.userService.getUserRents(this.id)
            .subscribe(function (rents) { return _this.rents = rents; }, function (error) { return _this.errorMessage = error; });
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(199),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* Auth */]) === "function" && _e || Object])
], LandingComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=landing.component.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.msg = '';
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.user)
            .subscribe(function (data) {
            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAdmin', data.admin);
                localStorage.setItem('userId', data.id);
                _this.router.navigate(['landing']);
            }
            else {
                _this.msg = 'Something went wrong, please check your input data try again.';
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(200),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.usersUrl = 'api/authenticate/';
    }
    LoginService.prototype.login = function (user) {
        return this.http.post(this.usersUrl, user)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    LoginService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(201),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(userService, route, router, auth) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.id = this.auth.getUserId();
        this.getUser();
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.id)
            .subscribe(function (user) { return _this.user = user; }, function (error) { return _this.errorMessage = error; });
    };
    ProfileComponent.prototype.back = function () {
        this.router.navigate(['/landing/']);
    };
    ProfileComponent.prototype.save = function () {
        var _this = this;
        this.userService.updateUser(this.id, this.user)
            .subscribe(function (next) { return _this.back(); }, function (error) { return _this.errorMessage = error; });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(202),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* Auth */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rent_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_book_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rent_component__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RentAddComponent = (function () {
    function RentAddComponent(rentService, bookService, userService, route, router) {
        this.rentService = rentService;
        this.bookService = bookService;
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    RentAddComponent.prototype.ngOnInit = function () {
        this.rent = new __WEBPACK_IMPORTED_MODULE_5__rent_component__["b" /* Rent */];
        this.getUsers();
        this.getBooks();
    };
    RentAddComponent.prototype.back = function () {
        this.router.navigate(['/rents/']);
    };
    RentAddComponent.prototype.save = function () {
        var _this = this;
        this.rentService.createRent(this.rent)
            .subscribe(function (next) { return _this.back(); }, function (error) { return _this.errorMessage = error; });
    };
    RentAddComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    RentAddComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; });
    };
    return RentAddComponent;
}());
RentAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rent-add',
        template: __webpack_require__(203),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rent_service__["a" /* RentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rent_service__["a" /* RentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__book_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book_book_service__["a" /* BookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RentAddComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=rent-add.component.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rent_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RentListComponent = (function () {
    function RentListComponent(rentService, titleService, route, router) {
        this.rentService = rentService;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
    }
    RentListComponent.prototype.ngOnInit = function () {
        this.getRents();
        this.titleService.setTitle('Library - Rents');
    };
    RentListComponent.prototype.getRents = function () {
        var _this = this;
        this.rentService.getRents()
            .subscribe(function (rents) { return _this.rents = rents; }, function (error) { return _this.errorMessage = error; });
    };
    RentListComponent.prototype.activateRent = function (event, id) {
        if (event.target.nodeName !== 'BUTTON' && event.target.className !== 'action') {
            this.router.navigate(['/rents/' + id]);
        }
    };
    RentListComponent.prototype.add = function () {
        this.router.navigate(['/rents/add']);
    };
    RentListComponent.prototype.deleteRent = function (id) {
        var _this = this;
        this.rentService.deleteRent(id)
            .subscribe(function (rents) { return _this.getRents(); }, function (error) { return _this.errorMessage = error; });
    };
    RentListComponent.prototype.updateRent = function (id) {
        var _this = this;
        this.rentService.getRent(id)
            .subscribe(function (rent) {
            rent.returned = true;
            _this.rentService.updateRent(id, rent)
                .subscribe(function (rents) { return _this.getRents(); }, function (error) { return _this.errorMessage = error; });
        }, function (error) { return _this.errorMessage = error; });
    };
    return RentListComponent;
}());
RentListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rent-list',
        template: __webpack_require__(204),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rent_service__["a" /* RentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rent_service__["a" /* RentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RentListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=rent-list.component.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_component__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserAddComponent = (function () {
    function UserAddComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user_component__["b" /* User */];
    };
    UserAddComponent.prototype.back = function () {
        this.router.navigate(['/users/']);
    };
    UserAddComponent.prototype.save = function () {
        var _this = this;
        this.userService.createUser(this.user)
            .subscribe(function (data) { return _this.validate(data); }, function (error) { return _this.errorMessage = error; });
    };
    UserAddComponent.prototype.validate = function (data) {
        if (!data.success) {
            this.msg = data.message;
        }
        else {
            this.back();
        }
    };
    return UserAddComponent;
}());
UserAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-add',
        template: __webpack_require__(206),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserAddComponent);

var _a, _b, _c;
//# sourceMappingURL=user-add.component.js.map

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserListComponent = (function () {
    function UserListComponent(userService, titleService, route, router) {
        this.userService = userService;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.titleService.setTitle('Library - Users');
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    UserListComponent.prototype.activateUser = function (event, id) {
        if (event.target.nodeName !== 'BUTTON' && event.target.className !== 'action') {
            this.router.navigate(['/users/' + id]);
        }
    };
    UserListComponent.prototype.add = function () {
        this.router.navigate(['/users/add']);
    };
    UserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id)
            .subscribe(function (next) { return _this.getUsers(); }, function (error) { return _this.errorMessage = error; });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(207),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], UserListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-list.component.js.map

/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 111;


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(127);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.title = 'Library Application';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('userId');
        this.router.navigate(['login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(195),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* Auth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* Auth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_landing_module__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_module__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_book_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rent_rent_module__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_module__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_not_found_page_not_found_module__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__landing_landing_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_user_list_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_user_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_user_add_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__book_book_list_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__book_book_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__book_book_add_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__rent_rent_list_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__rent_rent_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__rent_rent_add_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__profile_profile_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__page_not_found_page_not_found_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// auth



// app modules







// app components














var appRoutes = [
    {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
        data: {
            title: 'Login'
        }
    },
    {
        path: 'landing',
        component: __WEBPACK_IMPORTED_MODULE_17__landing_landing_component__["a" /* LandingComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]],
        data: {
            title: 'Landing'
        }
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_18__user_user_list_component__["a" /* UserListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["b" /* AuthGuardAdmin */]],
        data: {
            title: 'Users'
        }
    },
    {
        path: 'users/add',
        component: __WEBPACK_IMPORTED_MODULE_20__user_user_add_component__["a" /* UserAddComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["b" /* AuthGuardAdmin */]],
        data: {
            title: 'Add User'
        }
    },
    {
        path: 'users/:id',
        component: __WEBPACK_IMPORTED_MODULE_19__user_user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["b" /* AuthGuardAdmin */]],
        data: {
            title: 'User'
        }
    },
    {
        path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_21__book_book_list_component__["a" /* BookListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["b" /* AuthGuardAdmin */]],
        data: {
            title: 'Books'
        }
    },
    {
        path: 'books/add',
        component: __WEBPACK_IMPORTED_MODULE_23__book_book_add_component__["a" /* BookAddComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["b" /* AuthGuardAdmin */]],
        data: {
            title: 'Add Book'
        }
    },
    {
        path: 'books/:id',
        component: __WEBPACK_IMPORTED_MODULE_22__book_book_component__["a" /* BookComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["b" /* AuthGuardAdmin */]],
        data: {
            title: 'Book'
        }
    },
    {
        path: 'rents',
        component: __WEBPACK_IMPORTED_MODULE_24__rent_rent_list_component__["a" /* RentListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["b" /* AuthGuardAdmin */]],
        data: {
            title: 'Rents'
        }
    },
    {
        path: 'rents/add',
        component: __WEBPACK_IMPORTED_MODULE_26__rent_rent_add_component__["a" /* RentAddComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["b" /* AuthGuardAdmin */]],
        data: {
            title: 'Add Rent'
        }
    },
    {
        path: 'rents/:id',
        component: __WEBPACK_IMPORTED_MODULE_25__rent_rent_component__["a" /* RentComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["b" /* AuthGuardAdmin */]],
        data: {
            title: 'Rent'
        }
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_27__profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]],
        data: {
            title: 'Profile'
        }
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_28__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    },
    {
        path: '**',
        redirectTo: '404',
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__auth_auth_module__["a" /* AuthModule */],
            // app modules
            __WEBPACK_IMPORTED_MODULE_8__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_9__landing_landing_module__["a" /* LandingModule */],
            __WEBPACK_IMPORTED_MODULE_10__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_11__book_book_module__["a" /* BookModule */],
            __WEBPACK_IMPORTED_MODULE_12__rent_rent_module__["a" /* RentModule */],
            __WEBPACK_IMPORTED_MODULE_13__profile_profile_module__["a" /* ProfileModule */],
            __WEBPACK_IMPORTED_MODULE_14__page_not_found_page_not_found_module__["a" /* PageNotFoundModule */],
            // core modules
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["JsonpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["b" /* AuthGuardAdmin */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(23);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthConfig"](), http, options);
}
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]]
            },
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuard */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_list_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_add_component__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BookModule = (function () {
    function BookModule() {
    }
    return BookModule;
}());
BookModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__book_component__["a" /* BookComponent */], __WEBPACK_IMPORTED_MODULE_4__book_list_component__["a" /* BookListComponent */], __WEBPACK_IMPORTED_MODULE_6__book_add_component__["a" /* BookAddComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__book_service__["a" /* BookService */]]
    })
], BookModule);

//# sourceMappingURL=book.module.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_component__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandingModule = (function () {
    function LandingModule() {
    }
    return LandingModule;
}());
LandingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__landing_component__["a" /* LandingComponent */]]
    })
], LandingModule);

//# sourceMappingURL=landing.module.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageNotFoundModule = (function () {
    function PageNotFoundModule() {
    }
    return PageNotFoundModule;
}());
PageNotFoundModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__page_not_found_component__["a" /* PageNotFoundComponent */]]
    })
], PageNotFoundModule);

//# sourceMappingURL=page-not-found.module.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */]]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rent_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rent_list_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rent_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rent_add_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RentModule = (function () {
    function RentModule() {
    }
    return RentModule;
}());
RentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__rent_component__["a" /* RentComponent */], __WEBPACK_IMPORTED_MODULE_3__rent_list_component__["a" /* RentListComponent */], __WEBPACK_IMPORTED_MODULE_5__rent_add_component__["a" /* RentAddComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__rent_service__["a" /* RentService */]]
    })
], RentModule);

//# sourceMappingURL=rent.module.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_add_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__user_list_component__["a" /* UserListComponent */], __WEBPACK_IMPORTED_MODULE_3__user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_5__user_add_component__["a" /* UserAddComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".template {\n  padding-top: 5rem;\n}\n\ntable tr:hover {\n  cursor: pointer;\n}\n\n.nav-logout:hover {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "button:hover {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "table tr:hover {\n  cursor: pointer;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.list-header {\n  margin-bottom: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "button:hover {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "button:hover {\n  cursor: pointer;\n}\n\n.jumbotron {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.alert {\n  margin:25px 0 0 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "button:hover {\n  cursor: pointer;\n}\n\nselect[multiple], \ntextarea {\n  min-height: 180px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".small {\n    font-size: 10px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.list-header {\n  margin-bottom: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "button:hover {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "button:hover {\n  cursor: pointer;\n}\n\n.form-text.text-muted {\n  color: #f00;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "table tr:hover {\n  cursor: pointer;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.list-header {\n  margin-bottom: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "button:hover {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" routerLink=\"/\">Library App</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul *ngIf=\"auth.loggedIn() && auth.isAdmin() === 'true'\" class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/users\" class=\"nav-link\">Users</a></li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/books\" class=\"nav-link\">Books</a></li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/rents\" class=\"nav-link\">Rents</a></li>\n      \n    </ul>\n    <ul *ngIf=\"auth.loggedIn()\" class=\"nav navbar-nav ml-auto w-100 justify-content-end\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/profile\" class=\"nav-link\">Profile</a></li>\n      <li class=\"nav-item nav-logout\"><a (click)=\"logout()\" class=\"nav-link\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"template\">\n    <!-- Routed views go here -->\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid book-header\">\n  <div class=\"row\">\n    <h3>Add book</h3>\n  </div>\n</div>\n\n<form #bookForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"title\">Title</label>\n      <input required type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" placeholder=\"Title\" [ngModel]=\"book?.title\" (ngModelChange)=\"book.title=$event\">\n    </div>\n    <div class=\"form-group col-6\">\n      <label for=\"author\">Author</label>\n      <input required type=\"text\" name=\"author\" id=\"author\" class=\"form-control\" placeholder=\"Author\" [ngModel]=\"book?.author\" (ngModelChange)=\"book.author=$event\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"year\">Year</label>\n      <select required class=\"form-control\" id=\"year\" name=\"year\" [ngModel]=\"book?.year\" (ngModelChange)=\"book.year=$event\">\n        <option *ngFor=\"let year of years\">{{ year }}</option>\n      </select>\n    </div>\n    <div class=\"form-group col-6\">\n      <label for=\"genre\">Genre</label>\n      <select required class=\"form-control\" id=\"genre\" name=\"genre\" [ngModel]=\"book?.genre\" (ngModelChange)=\"book.genre=$event\">\n        <option *ngFor=\"let genre of genres\">{{ genre }}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <label required for=\"stock\">Stock</label>\n      <input type=\"number\" name=\"stock\" id=\"stock\" class=\"form-control\" placeholder=\"Stock\" [ngModel]=\"book?.stock\" (ngModelChange)=\"book.stock=$event\">\n    </div>\n  </div>\n\n   <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"save()\" [disabled]=\"!bookForm.form.valid\">SAVE</button>\n      <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"back()\">BACK</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<header class=\"list-header row\">\n  <div class=\"col-9\">\n    <h3>Books</h3>\n  </div>\n  <div class=\"col-3 text-right\">\n    <button class=\"btn btn-primary\" (click)=\"add()\">Add new book</button>\n  </div>\n</header>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <thead>\n      <th>Title</th>\n      <th>Author</th>\n      <th>Year</th>\n      <th>Genre</th>\n      <th>Stock</th>\n      <th>Action</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let book of books\" (click)=\"activateBook($event, book._id)\">\n        <td>{{book.title}}</td>\n        <td>{{book.author}}</td>\n        <td>{{book.year}}</td>\n        <td>{{book.genre}}</td>\n        <td>{{book.stock}}</td>\n        <td class=\"action\">\n          <button class=\"btn btn-danger\" (click)=\"deleteBook(book._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid book-header\">\n  <div class=\"row\">\n    <h3>Update book</h3>\n  </div>\n</div>\n\n<form #bookForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"title\">Title</label>\n      <input required type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" placeholder=\"Title\" [ngModel]=\"book?.title\" (ngModelChange)=\"book.title=$event\">\n    </div>\n    <div class=\"form-group col-6\">\n      <label for=\"author\">Author</label>\n      <input required type=\"text\" name=\"author\" id=\"author\" class=\"form-control\" placeholder=\"Author\" [ngModel]=\"book?.author\" (ngModelChange)=\"book.author=$event\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"year\">Year</label>\n      <select required class=\"form-control\" id=\"year\" name=\"year\" [ngModel]=\"book?.year\" (ngModelChange)=\"book.year=$event\">\n        <option *ngFor=\"let year of years\">{{ year }}</option>\n      </select>\n    </div>\n    <div class=\"form-group col-6\">\n      <label for=\"genre\">Genre</label>\n      <select required class=\"form-control\" id=\"genre\" name=\"genre\" [ngModel]=\"book?.genre\" (ngModelChange)=\"book.genre=$event\">\n        <option *ngFor=\"let genre of genres\">{{ genre }}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <label for=\"stock\">Stock</label>\n      <input required type=\"number\" name=\"stock\" id=\"stock\" class=\"form-control\" placeholder=\"Stock\" [ngModel]=\"book?.stock\" (ngModelChange)=\"book.stock=$event\">\n    </div>\n  </div>\n\n   <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"save()\" [disabled]=\"!bookForm.form.valid\">SAVE</button>\n      <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"back()\">BACK</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.isAdmin() === 'true'\" class=\"jumbotron\">\n  <h1 class=\"display-3\">Welcome!</h1>\n  <p class=\"lead\">This is a following application of a research work \"Application of Angular 2, TypeScript i REST Web services\".</p>\n  <hr class=\"my-4\">\n  <p>It should serve as a tool for a library administration, so that they can easily track users, books and rents.</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Source code</a>\n  </p>\n</div>\n\n<div *ngIf=\"auth.isAdmin() === 'false'\">\n  <header class=\"list-header row\">\n    <div class=\"col-9\">\n      <h3>My rents</h3>\n    </div>\n  </header>\n\n  <div class=\"table-responsive\">\n    <table class=\"table table-striped\">\n      <thead>\n        <th>Books</th>\n        <th>Date rented</th>\n        <th>Notes</th>\n        <th>Returned</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let rent of rents\">\n          <td>\n            <ul class=\"list-unstyled\">\n              <li *ngFor=\"let book of rent.books\">\n                {{book.title}}\n              </li>\n            </ul>\n          </td>\n          <td>{{rent.dateRented | date:'yMMMd'}}</td>\n          <td>{{rent.notes}}</td>\n          <td class=\"action\">\n            <button *ngIf=\"rent.returned\" class=\"btn btn-secondary btn-success\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n            <button *ngIf=\"!rent.returned\" class=\"btn btn-secondary btn-danger\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h4>Hello visitor, please log in to continue.</h4>\n    <br>\n    <form #loginForm=\"ngForm\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></span>\n        <input required name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"user?.email\" (ngModelChange)=\"user.email=$event\">\n      </div>\n      <br>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon2\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span>\n        <input required name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" [ngModel]=\"user?.password\" (ngModelChange)=\"user.password=$event\">\n      </div>\n      <br>\n      <button class=\"btn btn-primary\" (click)=\"login()\" [disabled]=\"!loginForm.form.valid\">Login</button>\n    \n      <div *ngIf=\"msg !== ''\" class=\"alert alert-danger\" role=\"alert\">\n        {{ msg }}\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<p>\n  Page not found. Please use main menu to navigate to a page.\n</p>\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid user-header\">\n  <div class=\"row\">\n    <h3>Update profile</h3>\n  </div>\n</div>\n\n<form #userForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"firstName\">First Name</label>\n      <input required type=\"text\" name=\"firstName\" id=\"firstName\" class=\"form-control\" placeholder=\"First Name\" [ngModel]=\"user?.firstName\" (ngModelChange)=\"user.firstName=$event\">\n    </div>\n    <div class=\"form-group col-6\">\n      <label for=\"lastName\">Last Name</label>\n      <input required type=\"text\" name=\"lastName\" id=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" [ngModel]=\"user?.lastName\" (ngModelChange)=\"user.lastName=$event\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"phone\">Phone</label>\n      <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" placeholder=\"Phone\" [ngModel]=\"user?.phone\" (ngModelChange)=\"user.phone=$event\">\n    </div>\n    <div class=\"form-group col-6\">\n      <label for=\"email\">Email</label>\n      <input required type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"user?.email\" (ngModelChange)=\"user.email=$event\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"password\">Password</label>\n      <input required type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" [ngModel]=\"user?.password\" (ngModelChange)=\"user.password=$event\">\n    </div>\n  </div>\n\n   <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"save()\" [disabled]=\"!userForm.form.valid\">SAVE</button>\n      <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"back()\">BACK</button>\n      <small class=\"form-text text-muted\">{{ msg }}</small>\n    </div>\n  </div>\n</form>\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid rent-header\">\n  <div class=\"row\">\n    <h3>Add rent</h3>\n  </div>\n</div>\n\n<form #rentForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <label for=\"user\">User</label>\n      <select required class=\"form-control\" id=\"user\" name=\"user\" [ngModel]=\"rent?.user\" (ngModelChange)=\"rent.user=$event\">\n        <option *ngFor=\"let user of users\" [value]=\"user._id\">{{ user.firstName }} {{ user.lastName }}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <label for=\"book\">Books</label>\n      <select required class=\"form-control\" id=\"book\" name=\"book\" [ngModel]=\"rent?.books\" (ngModelChange)=\"rent.books=$event\" multiple>\n        <option *ngFor=\"let book of books\" [value]=\"book._id\" [disabled]=\"book.stock < 1\">{{ book.title }} ({{ book.stock }})</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <label for=\"notes\">Notes</label>\n      <textarea name=\"notes\" id=\"notes\" class=\"form-control\" placeholder=\"Notes\" [ngModel]=\"rent?.notes\" (ngModelChange)=\"rent.notes=$event\"></textarea>\n    </div>\n  </div>\n\n   <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"save()\" [disabled]=\"!rentForm.form.valid\">SAVE</button>\n      <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"back()\">BACK</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<header class=\"list-header row\">\n  <div class=\"col-9\">\n    <h3>Rents</h3>\n  </div>\n  <div class=\"col-3 text-right\">\n    <button class=\"btn btn-primary\" (click)=\"add()\">Add new rent</button>\n  </div>\n</header>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <thead>\n      <th>User</th>\n      <th>Books</th>\n      <th>Date rented</th>\n      <th>Notes</th>\n      <th>Returned</th>\n      <th>Action</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let rent of rents\">\n        <td>{{rent.user.firstName}} {{rent.user.lastName}} <br><span class=\"small\">{{rent.user._id}}</span></td>\n        <td>\n          <ul class=\"list-unstyled\">\n            <li *ngFor=\"let book of rent.books\">\n              {{book.title}}\n            </li>\n          </ul>\n        </td>\n        <td>{{rent.dateRented | date:'yMMMd'}}</td>\n        <td>{{rent.notes}}</td>\n         <td class=\"action\">\n          <button class=\"btn btn-secondary\" [ngClass]=\"{'btn-success' : rent.returned}\" [disabled]=\"rent.returned\" (click)=\"updateRent(rent._id)\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n        </td>\n        <td class=\"action\">\n          <button class=\"btn btn-danger\" (click)=\"deleteRent(rent._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<p>\n  rent works!\n</p>\n"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid user-header\">\n  <div class=\"row\">\n    <h3>Add user</h3>\n  </div>\n</div>\n\n<form #userForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"firstName\">First Name</label>\n      <input required type=\"text\" name=\"firstName\" id=\"firstName\" class=\"form-control\" placeholder=\"First Name\" [ngModel]=\"user?.firstName\" (ngModelChange)=\"user.firstName=$event\">\n    </div>\n    <div class=\"form-group col-6\">\n      <label for=\"lastName\">Last Name</label>\n      <input required type=\"text\" name=\"lastName\" id=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" [ngModel]=\"user?.lastName\" (ngModelChange)=\"user.lastName=$event\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"phone\">Phone</label>\n      <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" placeholder=\"Phone\" [ngModel]=\"user?.phone\" (ngModelChange)=\"user.phone=$event\">\n    </div>\n    <div class=\"form-group col-6\">\n      <label for=\"email\">Email</label>\n      <input required type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"user?.email\" (ngModelChange)=\"user.email=$event\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"password\">Password</label>\n      <input required type=\"text\" name=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" [ngModel]=\"user?.password\" (ngModelChange)=\"user.password=$event\">\n    </div>\n  </div>\n\n   <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"save()\" [disabled]=\"!userForm.form.valid\">SAVE</button>\n      <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"back()\">BACK</button>\n      <small class=\"form-text text-muted\">{{ msg }}</small>\n    </div>\n  </div>\n</form>\n"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<header class=\"list-header row\">\n  <div class=\"col-9\">\n    <h3>Users</h3>\n  </div>\n  <div class=\"col-3 text-right\">\n    <button class=\"btn btn-primary\" (click)=\"add()\">Add new user</button>\n  </div>\n</header>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-striped\">\n    <thead>\n      <th>First name</th>\n      <th>Last name</th>\n      <th>Date created</th>\n      <th>Phone</th>\n      <th>Email</th>\n      <th>Action</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users\" (click)=\"activateUser($event, user._id)\">\n        <td>{{user.firstName}}</td>\n        <td>{{user.lastName}}</td>\n        <td>{{user.dateCreated | date:'yMMMd'}}</td>\n        <td>{{user.phone}}</td>\n        <td>{{user.email}}</td>\n        <td class=\"action\">\n          <button class=\"btn btn-danger\" (click)=\"deleteUser(user._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid user-header\">\n  <div class=\"row\">\n    <h3>Update user</h3>\n  </div>\n</div>\n\n<form #userForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"firstName\">First Name</label>\n      <input required type=\"text\" name=\"firstName\" id=\"firstName\" class=\"form-control\" placeholder=\"First Name\" [ngModel]=\"user?.firstName\" (ngModelChange)=\"user.firstName=$event\">\n    </div>\n    <div class=\"form-group col-6\">\n      <label for=\"lastName\">Last Name</label>\n      <input required type=\"text\" name=\"lastName\" id=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" [ngModel]=\"user?.lastName\" (ngModelChange)=\"user.lastName=$event\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"dateCreated\">Date Created</label>\n      <input type=\"text\" disabled name=\"dateCreated\" id=\"dateCreated\" class=\"form-control\" placeholder=\"Date Created\" [ngModel]=\"user?.dateCreated | date:'yMMMd'\" (ngModelChange)=\"user.dateCreated=$event\">\n    </div>\n    <div class=\"form-group col-6\">\n      <label for=\"phone\">Phone</label>\n      <input required type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" placeholder=\"Phone\" [ngModel]=\"user?.phone\" (ngModelChange)=\"user.phone=$event\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <label for=\"email\">Email</label>\n      <input required type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"user?.email\" (ngModelChange)=\"user.email=$event\">\n    </div>\n  </div>\n\n   <div class=\"row\">\n    <div class=\"form-group col-12\">\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"save()\" [disabled]=\"!userForm.form.valid\">SAVE</button>\n      <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"back()\">BACK</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(112);


/***/ })
],[243]);
//# sourceMappingURL=main.bundle.js.map