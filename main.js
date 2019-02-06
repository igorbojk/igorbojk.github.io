(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'touch-on';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _configs_configs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configs/configs.module */ "./src/app/configs/configs.module.ts");
/* harmony import */ var _shared_services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/websocket/websocket.service */ "./src/app/shared/services/websocket/websocket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                // angular
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // 3rd party
                // core & shared
                _configs_configs_module__WEBPACK_IMPORTED_MODULE_7__["ConfigsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                // features
                _modules_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                // app
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_shared_services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_8__["WebsocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configs/configs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/configs/configs.module.ts ***!
  \*******************************************/
/*! exports provided: ConfigsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigsModule", function() { return ConfigsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfigsModule = /** @class */ (function () {
    function ConfigsModule() {
    }
    ConfigsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [],
            bootstrap: []
        })
    ], ConfigsModule);
    return ConfigsModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home-body/home-body.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/home-body/home-body.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-home-body\">\n    <div class=\"app-home-body__container\">\n        <img class=\"app-home-body__main\" src=\"assets/fon2.jpg\">\n\n        <div class=\"app-home-body__gostin app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.gostin === 'on',\n                          'app-home-body__item--hide': allRooms?.gostin === 'off'  }\">\n            <img src=\"assets/part/gostin.png\">\n        </div>\n\n        <div class=\"app-home-body__kuhnya app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.kuhnya === 'on',\n                          'app-home-body__item--hide': allRooms?.kuhnya === 'off'  }\">\n            <img src=\"assets/part/kuhnya.png\">\n        </div>\n\n        <div class=\"app-home-body__spalnya app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.spalnya === 'on',\n                          'app-home-body__item--hide': allRooms?.spalnya === 'off'  }\">\n            <img src=\"assets/part/spalnya.png\">\n        </div>\n\n        <div class=\"app-home-body__vanna app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.vanna === 'on',\n                          'app-home-body__item--hide': allRooms?.vanna === 'off'  }\">\n            <img src=\"assets/part/vanna.png\">\n        </div>\n\n        <div class=\"app-home-body__ventilyaciya app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.ventilyaciya === 'on',\n                          'app-home-body__item--hide': allRooms?.ventilyaciya === 'off'  }\">\n            <img src=\"assets/part/ventilyaciya.png\">\n        </div>\n\n        <div class=\"app-home-body__otopl app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.otopl === 'on',\n                          'app-home-body__item--hide': allRooms?.otopl === 'off'  }\">\n            <img src=\"assets/part/otopl.png\">\n        </div>\n\n        <div class=\"app-home-body__protechki app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.protechki === 'on',\n                          'app-home-body__item--hide': allRooms?.protechki === 'off'  }\">\n            <img src=\"assets/part/protechki.png\">\n        </div>\n\n        <div class=\"app-home-body__otopl-vikl app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.otopl === 'off',\n                          'app-home-body__item--hide': allRooms?.otopl === 'on'  }\">\n            <img src=\"assets/part/otopl-vikl.png\">\n        </div>\n\n        <div class=\"app-home-body__kondic-gostin app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.gostin_kondic === 'on',\n                          'app-home-body__item--hide': allRooms?.gostin_kondic === 'off'  }\">\n            <img src=\"assets/part/kondic-gostin.png\">\n        </div>\n\n        <div class=\"app-home-body__kondic-spalnya app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.spalnya_kondic === 'on',\n                          'app-home-body__item--hide': allRooms?.spalnya_kondic === 'off'  }\">\n            <img src=\"assets/part/kondic-spalnya.png\">\n        </div>\n\n        <div class=\"app-home-body__kondic-gostin-off app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.gostin_kondic === 'off',\n                          'app-home-body__item--hide': allRooms?.gostin_kondic === 'on'  }\">\n            <img src=\"assets/part/kondic-gostin-off.png\">\n        </div>\n\n        <div class=\"app-home-body__kondic-spalnya-off app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.spalnya_kondic === 'off',\n                          'app-home-body__item--hide': allRooms?.spalnya_kondic === 'on'  }\">\n            <img src=\"assets/part/kondic-spalnya-off.png\">\n        </div>\n\n        <div class=\"app-home-body__okna-otkr app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.okna === 'off',\n                          'app-home-body__item--hide': allRooms?.okna === 'on'  }\">\n            <img src=\"assets/part/okna-otkr.png\">\n        </div>\n\n        <div class=\"app-home-body__okna-zakr app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.okna === 'on',\n                          'app-home-body__item--hide': allRooms?.okna === 'off'  }\">\n            <img src=\"assets/part/okna-zakr.png\">\n        </div>\n\n        <div class=\"app-home-body__okno-dver app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.okno_dver === 'off',\n                          'app-home-body__item--hide': allRooms?.okno_dver === 'on'  }\">\n            <img src=\"assets/part/okno-dver.png\">\n        </div>\n\n        <div class=\"app-home-body__okno-dver-zakr app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.okno_dver === 'on',\n                          'app-home-body__item--hide': allRooms?.okno_dver === 'off'  }\">\n            <img src=\"assets/part/okno-dver-zakr.png\">\n        </div>\n\n        <div class=\"app-home-body__okno-otkr app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.okno === 'on',\n                          'app-home-body__item--hide': allRooms?.okno === 'off'  }\">\n            <img src=\"assets/part/okno-otkr.png\">\n        </div>\n\n        <div class=\"app-home-body__okno-zakr app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.okno === 'off',\n                          'app-home-body__item--hide': allRooms?.okno === 'on'  }\">\n            <img src=\"assets/part/okno-zakr.png\">\n        </div>\n\n        <div class=\"app-home-body__rozetka-gostinna app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.gostin_rozetka === 'on',\n                          'app-home-body__item--hide': allRooms?.gostin_rozetka === 'off'  }\">\n            <img src=\"assets/part/rozetka-gostinna.png\">\n        </div>\n\n        <div class=\"app-home-body__rozetka-gostinna-off app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.gostin?.rozetka === 'off',\n                          'app-home-body__item--hide': allRooms?.gostin?.rozetka === 'on'  }\">\n            <img src=\"assets/part/rozetka-gostinna-off.png\">\n        </div>\n\n        <div class=\"app-home-body__rozetka-kuhnya app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.kuhnya_rozetka === 'on',\n                          'app-home-body__item--hide': allRooms?.kuhnya_rozetka === 'off'  }\">\n            <img src=\"assets/part/rozetka-kuhnya.png\">\n        </div>\n\n        <div class=\"app-home-body__rozetka-kuhnya-off app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.kuhnya_rozetka === 'off',\n                          'app-home-body__item--hide': allRooms?.kuhnya_rozetka === 'on'  }\">\n            <img src=\"assets/part/rozetka-kuhnya-off.png\">\n        </div>\n\n        <div class=\"app-home-body__rozetka-spalnya app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.spalnya_rozetka === 'on',\n                          'app-home-body__item--hide': allRooms?.spalnya_rozetka === 'off'  }\">\n        <img src=\"assets/part/rozetka-spalnya.png\">\n    </div>\n\n        <div class=\"app-home-body__rozetka-spalnya-off app-home-body__item\"\n             [ngClass]=\"{'app-home-body__item--show': allRooms?.spalnya_rozetka === 'off',\n                          'app-home-body__item--hide': allRooms?.spalnya_rozetka === 'on'  }\">\n            <img src=\"assets/part/rozetka-spalnya-off.png\">\n        </div>\n\n        <!--<div class=\"app-home-body__rozetki-vkl app-home-body__item\"-->\n             <!--[ngClass]=\"{'app-home-body__item&#45;&#45;show': allRooms?.gostin === 'on',-->\n                          <!--'app-home-body__item&#45;&#45;hide': allRooms?.gostin === 'off'  }\">-->\n            <!--<img src=\"assets/part/rozetki-vkl.png\">-->\n        <!--</div>-->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/home/home-body/home-body.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/home-body/home-body.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-home-body {\n  height: 60vh;\n  background-color: #fff;\n  border: solid #00B35C;\n  border-top-width: 5px;\n  border-bottom-width: 5px;\n  border-left-width: 0;\n  border-right-width: 0;\n  box-sizing: border-box;\n  text-align: center; }\n  .app-home-body__container {\n    display: inline-block;\n    min-width: 0;\n    width: auto;\n    height: 100%;\n    position: relative; }\n  .app-home-body__main {\n    display: block;\n    height: 100%;\n    width: auto; }\n  .app-home-body__item {\n    display: none;\n    position: absolute; }\n  .app-home-body__item--show {\n      display: block; }\n  .app-home-body__item--hide {\n      display: none; }\n  .app-home-body__item img {\n      width: auto;\n      height: 100%; }\n  .app-home-body__gostin {\n    top: 47.7%;\n    left: 37.1%;\n    height: 12.6vh; }\n  .app-home-body__kuhnya {\n    top: 44.7%;\n    left: 50.8%;\n    height: 13.3vh; }\n  .app-home-body__spalnya {\n    top: 14.5%;\n    left: 51.5%;\n    height: 18vh; }\n  .app-home-body__vanna {\n    top: 20.5%;\n    left: 36.8%;\n    height: 14.9vh; }\n  .app-home-body__ventilyaciya {\n    top: 18.3%;\n    left: 22.16%;\n    height: 39.4vh; }\n  .app-home-body__otopl {\n    top: 15.5%;\n    left: 23.56%;\n    height: 39vh; }\n  .app-home-body__protechki {\n    top: 40.25%;\n    left: 36.86%;\n    height: 25vh; }\n  .app-home-body__otopl-vikl {\n    top: 33.25%;\n    left: 51.86%;\n    height: 30vh; }\n  .app-home-body__kondic-gostin {\n    top: 46.25%;\n    left: 34.16%;\n    height: 17vh; }\n  .app-home-body__kondic-spalnya {\n    top: 20.05%;\n    left: 47.6%;\n    height: 17vh; }\n  .app-home-body__kondic-gostin-off {\n    top: 46.05%;\n    left: 36.6%;\n    height: 4.5vh; }\n  .app-home-body__kondic-spalnya-off {\n    top: 21%;\n    left: 60%;\n    height: 4vh; }\n  .app-home-body__okna-otkr {\n    top: 20%;\n    left: 23.5%;\n    height: 26.5vh; }\n  .app-home-body__okna-zakr {\n    top: 20.1%;\n    left: 23.5%;\n    height: 26.7vh; }\n  .app-home-body__okno-dver {\n    top: 44.1%;\n    left: 72.5%;\n    height: 12.7vh; }\n  .app-home-body__okno-dver-zakr {\n    top: 45%;\n    left: 73.1%;\n    height: 10.9vh; }\n  .app-home-body__okno-otkr {\n    top: 46%;\n    left: 28.1%;\n    height: 12.2vh; }\n  .app-home-body__okno-zakr {\n    top: 46%;\n    left: 28.1%;\n    height: 12.5vh; }\n  .app-home-body__rozetka-gostinna {\n    top: 51%;\n    left: 39.1%;\n    height: 4.1vh; }\n  .app-home-body__rozetka-gostinna-off {\n    top: 51%;\n    left: 39.1%;\n    height: 4.1vh; }\n  .app-home-body__rozetka-kuhnya {\n    top: 49.2%;\n    left: 58.56%;\n    height: 4.1vh; }\n  .app-home-body__rozetka-kuhnya-off {\n    top: 49.2%;\n    left: 58.56%;\n    height: 4.1vh; }\n  .app-home-body__rozetka-spalnya {\n    top: 33.6%;\n    left: 53.56%;\n    height: 4vh; }\n  .app-home-body__rozetka-spalnya-off {\n    top: 33.6%;\n    left: 53.56%;\n    height: 4vh; }\n  .app-home-body__rozetki-vkl {\n    top: 33.6%;\n    left: 39.2%;\n    height: 14.3vh; }\n"

/***/ }),

/***/ "./src/app/modules/home/home-body/home-body.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/home-body/home-body.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBodyComponent", function() { return HomeBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_event_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/event-type */ "./src/app/shared/constants/event-type.ts");
/* harmony import */ var _shared_services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/websocket/websocket.service */ "./src/app/shared/services/websocket/websocket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeBodyComponent = /** @class */ (function () {
    function HomeBodyComponent(wsService) {
        this.wsService = wsService;
        this.allRooms = {};
    }
    HomeBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wsService.onMessage.subscribe(function (rooms) {
            // this.allRooms = rooms;
            _this.checkRoom(rooms);
            console.log(rooms);
        });
    };
    // {"kuhnya":"on"}
    HomeBodyComponent.prototype.checkAutoHideOff = function () {
        var _this = this;
        setTimeout(function () {
            for (var key in _this.allRooms) {
                if (_this.allRooms.hasOwnProperty(key)) {
                    if (_this.allRooms[key] === 'off') {
                        _this.allRooms[key] = null;
                    }
                }
            }
        }, 4000);
    };
    HomeBodyComponent.prototype.checkRoom = function (rooms) {
        for (var key in rooms) {
            if (rooms.hasOwnProperty(key)) {
                this.allRooms[_shared_constants_event_type__WEBPACK_IMPORTED_MODULE_1__["TYPE_EVENT"][key]] = rooms[key];
            }
        }
        // this.checkAutoHideOff();
    };
    HomeBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-body',
            template: __webpack_require__(/*! ./home-body.component.html */ "./src/app/modules/home/home-body/home-body.component.html"),
            styles: [__webpack_require__(/*! ./home-body.component.scss */ "./src/app/modules/home/home-body/home-body.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]])
    ], HomeBodyComponent);
    return HomeBodyComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home-bottom/home-bottom.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/home/home-bottom/home-bottom.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-home-bottom\">\n    <app-home-info></app-home-info>\n    <app-home-status></app-home-status>\n</div>"

/***/ }),

/***/ "./src/app/modules/home/home-bottom/home-bottom.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/home/home-bottom/home-bottom.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-home-bottom {\n  height: 25vh;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/modules/home/home-bottom/home-bottom.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/home/home-bottom/home-bottom.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBottomComponent", function() { return HomeBottomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeBottomComponent = /** @class */ (function () {
    function HomeBottomComponent() {
    }
    HomeBottomComponent.prototype.ngOnInit = function () {
    };
    HomeBottomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-bottom',
            template: __webpack_require__(/*! ./home-bottom.component.html */ "./src/app/modules/home/home-bottom/home-bottom.component.html"),
            styles: [__webpack_require__(/*! ./home-bottom.component.scss */ "./src/app/modules/home/home-bottom/home-bottom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeBottomComponent);
    return HomeBottomComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home-info/home-info.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/home-info/home-info.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-home-info\">\n    <div class=\"app-home-info__container\">\n        <span class=\"app-home-info__item\" *ngFor=\"let item of statusItems; trackBy: trackItem\">\n            <img [src]=\"getPath(item)\" alt=\"{{ item[item.status] }}\">\n            <span> {{ getTitle(item) }}</span>\n        </span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/home/home-info/home-info.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/home-info/home-info.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-home-info {\n  height: 12.5vh;\n  background-color: #fff; }\n  .app-home-info__container {\n    padding-top: 20px;\n    text-align: center; }\n  .app-home-info__item {\n    margin-left: 20px;\n    font-size: 40px;\n    line-height: 40px;\n    height: 40px;\n    display: inline-block;\n    font-weight: bold; }\n  .app-home-info__item span {\n      vertical-align: middle; }\n  .app-home-info__item img {\n      max-height: 100%;\n      vertical-align: baseline;\n      display: inline-block; }\n"

/***/ }),

/***/ "./src/app/modules/home/home-info/home-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/home-info/home-info.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeInfoComponent", function() { return HomeInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_event_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/constants/event-type */ "./src/app/shared/constants/event-type.ts");
/* harmony import */ var _shared_services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/websocket/websocket.service */ "./src/app/shared/services/websocket/websocket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeInfoComponent = /** @class */ (function () {
    function HomeInfoComponent(wsService) {
        this.wsService = wsService;
        this.statusItems = [];
        this.allRooms = {};
        this.status = {
            all_light_off: {
                status: false,
                on: 'Весь свет выключен',
                img_on: 'lamp.png',
                img_off: 'lamp.png',
            },
            gostin: {
                status: false,
                on: 'Свет в гостинной включен',
                off: 'Свет в гостинной выключен',
                img_on: 'lamp.png',
                img_off: 'lamp.png',
            },
            kuhnya: {
                status: false,
                on: 'Свет на кухне включен',
                off: 'Свет на кухне выключен',
                img_on: 'lamp.png',
                img_off: 'lamp.png',
            },
            spalnya: {
                status: false,
                on: 'Свет в спальне включен',
                off: 'Свет в спальне выключен',
                img_on: 'lamp.png',
                img_off: 'lamp.png',
            },
            home_lock_status: {
                status: false,
                on: 'Дом открыт',
                off: 'Дом закрыт',
                img_on: 'close.png',
                img_off: 'close.png',
            },
            okno: {
                status: false,
                on: 'Окно открыто',
                off: 'Окно закрыто',
                img_on: 'okno2.png',
                img_off: 'okno2.png'
            },
            okna: {
                status: false,
                on: 'Окна открыты',
                off: 'Окна закрыты',
                img_on: 'okno2.png',
                img_off: 'okno2.png'
            },
            gostin_kondic: {
                status: false,
                on: 'Кондиционер в гостинной включен',
                off: 'Кондиционер в гостинной выключен',
                img_on: 'kondic.png',
                img_off: 'kondic.png',
            },
            spalnya_kondic: {
                status: false,
                on: 'Кондиционер в спальне включен',
                off: 'Кондиционер в спальне выключен',
                img_on: 'kondic.png',
                img_off: 'kondic.png',
            },
            sensor_water: {
                status: false,
                on: 'Сработал датчик влажности',
                img_on: 'datchik-vlag.png',
                img_off: 'datchik-vlag.png'
            },
            water: {
                status: false,
                on: 'Сработал датчик протечки',
                img_on: 'datchik-prot.png',
                img_off: 'datchik-prot.png'
            },
            gostin_rozetka: {
                status: false,
                on: 'Розетка в гостинной включена',
                off: 'Розетка в гостинной выключена',
                img_on: 'rozetka.png',
                img_off: 'rozetka.png'
            },
            kuhnya_rozetka: {
                status: false,
                on: 'Розетка на кухне включена',
                off: 'Розетка на кухне выключена',
                img_on: 'rozetka.png',
                img_off: 'rozetka.png'
            },
            spalnya_rozetka: {
                status: false,
                on: 'Розетка в спальне включена',
                off: 'Розетка в спальне выключена',
                img_on: 'rozetka.png',
                img_off: 'rozetka.png'
            },
            otopl: {
                status: false,
                on: 'Отопление включено',
                off: 'Отопление выключено',
                img_on: 'otopl-vkl.png',
                img_off: 'otopl-vikl.png'
            }
        };
    }
    HomeInfoComponent.prototype.checkAutoHideOff = function () {
        var _this = this;
        setTimeout(function () {
            _this.statusItems = [];
        }, 4000);
    };
    HomeInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wsService.onMessage.subscribe(function (elems) {
            // this.allRooms = rooms;
            console.log(elems);
            _this.prepareInfo(elems);
        });
    };
    HomeInfoComponent.prototype.trackItem = function (index, item) {
        return index;
    };
    HomeInfoComponent.prototype.getPath = function (item) {
        return 'assets/icon/' + item['img_' + item.status];
    };
    HomeInfoComponent.prototype.getTitle = function (item) {
        return item[item.status];
    };
    HomeInfoComponent.prototype.prepareInfo = function (elems) {
        this.statusItems = [];
        for (var key in elems) {
            if (elems.hasOwnProperty(key)) {
                if (!this.status[_shared_constants_event_type__WEBPACK_IMPORTED_MODULE_1__["TYPE_EVENT"][key]])
                    return;
                var item = this.status[_shared_constants_event_type__WEBPACK_IMPORTED_MODULE_1__["TYPE_EVENT"][key]];
                item.status = elems[key];
                this.statusItems.push(item);
            }
        }
        this.checkAutoHideOff();
    };
    HomeInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-info',
            template: __webpack_require__(/*! ./home-info.component.html */ "./src/app/modules/home/home-info/home-info.component.html"),
            styles: [__webpack_require__(/*! ./home-info.component.scss */ "./src/app/modules/home/home-info/home-info.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }),
        __metadata("design:paramtypes", [_shared_services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"]])
    ], HomeInfoComponent);
    return HomeInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home-status/home-status.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/home/home-status/home-status.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-home-status\">\n    <div class=\"app-home-status__item\" *ngFor=\"let item of statusArr\">\n        <img [src]=\"getPath(item)\" alt=\"{{ item[item.status] }}\">\n        <span> {{ item.title }}</span>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/home/home-status/home-status.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/home/home-status/home-status.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-home-status {\n  height: 12.5vh;\n  background-color: #F5F5F5;\n  display: -ms-flexbox;\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/modules/home/home-status/home-status.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/home/home-status/home-status.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeStatusComponent", function() { return HomeStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/websocket/websocket.service */ "./src/app/shared/services/websocket/websocket.service.ts");
/* harmony import */ var _shared_constants_event_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/event-type */ "./src/app/shared/constants/event-type.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeStatusComponent = /** @class */ (function () {
    function HomeStatusComponent(wsService) {
        this.wsService = wsService;
        this.statusArr = [];
        this.config = {};
        this.status = {
            door_closed: {
                status: false,
                title: 'Двери закрыты',
                img: 'dver.png'
            },
            window_closed: {
                status: false,
                title: 'Окна закрыты',
                img: 'okno.png'
            },
            eco_mode: {
                status: false,
                title: 'Эко-режим отопления',
                img: 'eco.png'
            },
            house_lock: {
                status: false,
                title: 'Дом поставлен на охрану',
                img: 'oxrana.png'
            },
            motor: {
                status: false,
                title: 'Насос выключен',
                img: 'nasos.png'
            },
            water_off: {
                status: false,
                title: 'Подача воды перекрыта',
                img: 'podacha-vodi.png'
            },
            propeller_off: {
                status: false,
                title: 'Вытяжной вентилятор включен',
                img: 'vent.png'
            },
            warm_off: {
                status: false,
                title: 'Котел выключен',
                img: 'kotel.png'
            },
            motor_on: {
                status: false,
                title: 'Насос включен',
                img: 'nasos.png'
            },
            warm_on: {
                status: false,
                title: 'Котел включен',
                img: 'kotel.png'
            },
            light_off: {
                status: false,
                title: 'Свет включен',
                img: 'svet.png'
            },
            elect_on: {
                status: false,
                title: 'Розетки включены',
                img: 'rozetki.png'
            },
            normal_warm: {
                status: false,
                title: 'Обычный режим отопления',
                img: 'otopl.png'
            },
            house_unlocked: {
                status: false,
                title: 'Дом снят с охраны',
                img: 'oxrana.png'
            }
        };
    }
    HomeStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wsService.onMessage.subscribe(function (config) {
            _this.config = config;
            _this.prepareStatus(config);
        });
    };
    HomeStatusComponent.prototype.prepareStatus = function (elems) {
        this.statusArr = [];
        for (var key in elems) {
            if (elems.hasOwnProperty(key)) {
                if (!this.status[_shared_constants_event_type__WEBPACK_IMPORTED_MODULE_2__["TYPE_EVENT"][key]])
                    return;
                var item = this.status[_shared_constants_event_type__WEBPACK_IMPORTED_MODULE_2__["TYPE_EVENT"][key]];
                item.status = elems[key];
                this.statusArr.push(item);
            }
        }
        this.checkAutoHideOff();
    };
    HomeStatusComponent.prototype.checkAutoHideOff = function () {
        var _this = this;
        setTimeout(function () {
            _this.statusArr = [];
        }, 4000);
    };
    HomeStatusComponent.prototype.getPath = function (item) {
        return 'assets/icon/' + item.img;
    };
    HomeStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-status',
            template: __webpack_require__(/*! ./home-status.component.html */ "./src/app/modules/home/home-status/home-status.component.html"),
            styles: [__webpack_require__(/*! ./home-status.component.scss */ "./src/app/modules/home/home-status/home-status.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_websocket_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]])
    ], HomeStatusComponent);
    return HomeStatusComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home-top/home-top.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/home-top/home-top.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-home-top\">\n    <img src=\"assets/logo2.png\">\n    <span>Домашняя автоматизация</span>\n</div>"

/***/ }),

/***/ "./src/app/modules/home/home-top/home-top.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/home-top/home-top.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-home-top {\n  height: 15vh;\n  background-color: #fff;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center; }\n  .app-home-top img {\n    height: 80%;\n    width: auto; }\n  .app-home-top span {\n    padding-left: 40px;\n    font-size: 28px;\n    text-transform: uppercase;\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/modules/home/home-top/home-top.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/home-top/home-top.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTopComponent", function() { return HomeTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeTopComponent = /** @class */ (function () {
    function HomeTopComponent() {
    }
    HomeTopComponent.prototype.ngOnInit = function () {
    };
    HomeTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-top',
            template: __webpack_require__(/*! ./home-top.component.html */ "./src/app/modules/home/home-top/home-top.component.html"),
            styles: [__webpack_require__(/*! ./home-top.component.scss */ "./src/app/modules/home/home-top/home-top.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeTopComponent);
    return HomeTopComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home-top></app-home-top>\r\n<app-home-body></app-home-body>\r\n<app-home-bottom></app-home-bottom>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _home_top_home_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-top/home-top.component */ "./src/app/modules/home/home-top/home-top.component.ts");
/* harmony import */ var _home_bottom_home_bottom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-bottom/home-bottom.component */ "./src/app/modules/home/home-bottom/home-bottom.component.ts");
/* harmony import */ var _home_body_home_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-body/home-body.component */ "./src/app/modules/home/home-body/home-body.component.ts");
/* harmony import */ var _home_info_home_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-info/home-info.component */ "./src/app/modules/home/home-info/home-info.component.ts");
/* harmony import */ var _home_status_home_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-status/home-status.component */ "./src/app/modules/home/home-status/home-status.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _home_top_home_top_component__WEBPACK_IMPORTED_MODULE_4__["HomeTopComponent"],
                _home_bottom_home_bottom_component__WEBPACK_IMPORTED_MODULE_5__["HomeBottomComponent"],
                _home_body_home_body_component__WEBPACK_IMPORTED_MODULE_6__["HomeBodyComponent"],
                _home_status_home_status_component__WEBPACK_IMPORTED_MODULE_8__["HomeStatusComponent"],
                _home_info_home_info_component__WEBPACK_IMPORTED_MODULE_7__["HomeInfoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
            ],
            providers: [],
            bootstrap: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/shared/constants/event-type.ts":
/*!************************************************!*\
  !*** ./src/app/shared/constants/event-type.ts ***!
  \************************************************/
/*! exports provided: TYPE_EVENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_EVENT", function() { return TYPE_EVENT; });
var TYPE_EVENT = {
    '1': 'gostin',
    '2': 'kuhnya',
    '3': 'spalnya',
    '4': 'vanna',
    '5': 'ventilyaciya',
    '6': 'otopl',
    '7': 'protechki',
    '8': 'gostin_kondic',
    '9': 'spalnya_kondic',
    '10': 'okna',
    '11': 'okno_dver',
    '12': 'okno',
    '13': 'gostin_rozetka',
    '14': 'kuhnya_rozetka',
    '15': 'spalnya_rozetka',
    '16': 'home_lock_status',
    '17': 'sensor_water',
    '18': 'door_closed',
    '19': 'window',
    '20': 'eco_mode',
    '21': 'home_lock_status',
    '22': 'motor',
    '23': 'water',
    '24': 'propeller',
    '25': 'warm',
    '26': 'all_light_off',
    '27': 'elect_on',
    '28': 'normal_warm',
};


/***/ }),

/***/ "./src/app/shared/services/websocket/websocket.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/websocket/websocket.service.ts ***!
  \****************************************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsocketService = /** @class */ (function () {
    function WebsocketService(http) {
        this.http = http;
        // Объявление всех массивов данных
        //  defaultServerUrl = '188.120.233.76:8000'; //Remote server for test
        //  defaultServerUrl = '172.16.100.200:8000'; // Real local server
        //  defaultServerUrl = '178.57.106.214:8000'; // Real local server with remote access  
        //   defaultServerUrl = 'localhost:8000'; //localhost for test
        this.defaultServerUrl = '188.120.233.76:8000'; //localhost for test
        this.settingsChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.roomsChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.scenesChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.eventsChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.usersChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.panelColor = '#004f92';
        this.defaultDashbordChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.loadingChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.errorChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.onMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        // this.userId = localStorage.getItem('userId');
        this.userId = 'tester0192';
        this.serverUrl = localStorage.getItem('serverUrl');
        if (!this.userId) {
            this.generateUserId();
        }
        //console.log('IDDDDD');
        //console.log(this.userId);
        if (!this.serverUrl) {
            this.serverUrl = this.defaultServerUrl;
        }
        //console.log(this.serverUrl);
        if (localStorage.getItem('panelColor')) {
            this.panelColor = localStorage.getItem('panelColor');
        }
        this.colorChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.panelColor);
        this.getItems();
        this.startWebSocket();
    }
    // Функция первоначальной загрузки данных
    WebsocketService.prototype.webSocketSendFirstStart = function () {
        var _this = this;
        this.socketSend.onopen = function () {
            //console.log(' Send Start');
            _this.wsSend(_this.userId, 'checkuser');
        };
        this.socketSend.onclose = function () {
            //console.log('Socket Send Close');
            _this.webSocketSendFirstStart();
        };
    };
    // Подключение Веб Сокета
    WebsocketService.prototype.startWebSocket = function () {
        var _this = this;
        this.socketGetURL = 'ws://' + this.serverUrl + '/?user=' + this.userId;
        this.socketSendURL = 'ws://' + this.serverUrl + '/?user=' + this.userId + '_2';
        this.socketGet = new WebSocket(this.socketGetURL);
        this.socketSend = new WebSocket(this.socketSendURL);
        //console.log('Start Web Socket');
        this.socketGet = new WebSocket(this.socketGetURL);
        this.socketSend = new WebSocket(this.socketSendURL);
        this.webSocketSendFirstStart();
        // Слушатели сообщений Web Socket'a
        this.socketGet.onopen = function () {
            _this.socketGet.onmessage = function (event) {
                var data = JSON.parse(event.data);
                _this.onMessage.next(data);
            };
        };
        this.socketGet.onerror = function (event) {
            //console.log('error: ' + event);
            //console.log(event);
        };
        this.socketGet.onclose = function (event) {
            //console.log('Socket Get Close');
            _this.reconnectToServer();
            _this.errorChange.next('SocketClose');
        };
    };
    // Загрузка item'ов
    WebsocketService.prototype.setItems = function (items) {
        var _this = this;
        items.forEach(function (item, itemIndex) {
            _this.roomsArr.forEach(function (room, roomIndex) {
                room.items.forEach(function (roomItem, roomItemIndex) {
                    if (item.id === roomItem.id) {
                        _this.roomsArr[roomIndex].items[roomItemIndex] = item;
                    }
                });
            });
        });
        this.roomsChange.next(this.roomsArr);
    };
    // Загрузка настроек
    WebsocketService.prototype.setSettings = function (items) {
        var _this = this;
        items.forEach(function (item, itemIndex) {
            _this.settingsArr.forEach(function (settingItem, settingIndex) {
                if (item.id === settingItem.id) {
                    _this.settingsArr[settingIndex] = item;
                    //console.log('setSettings: ' + settingIndex);
                }
                else if (settingItem.items) {
                    _this.settingsArr[settingIndex].items.forEach(function (settingItem2, settingIndex2) {
                        if (item.id === settingItem2.id) {
                            _this.settingsArr[settingIndex].items[settingIndex2] = item;
                        }
                    });
                }
            });
        });
    };
    // Загрузка Событий
    WebsocketService.prototype.setEvents = function (items) {
        var _this = this;
        items.forEach(function (item, itemIndex) {
            _this.eventsArr.forEach(function (settingItem, settingIndex) {
                if (item.id === settingItem.id) {
                    _this.eventsArr[settingIndex] = item;
                }
            });
        });
    };
    WebsocketService.prototype.setUsers = function (items) {
        this.usersArr = items;
        this.usersChange.next(this.usersArr);
    };
    WebsocketService.prototype.setItem = function (item) {
        var _this = this;
        this.roomsArr.forEach(function (room, roomIndex) {
            room.items.forEach(function (roomItem, roomItemIndex) {
                if (item.id === roomItem.id) {
                    _this.roomsArr[roomIndex].items[roomItemIndex] = item;
                }
            });
        });
    };
    // Отправка сообщений на WebSocket
    WebsocketService.prototype.wsSend = function (item, type) {
        //console.log('Ws Send');
        var status;
        var message;
        if (type === 'item') {
            status = 'itemChange';
            message = '{ "status": "itemChange", "items": [' + JSON.stringify(item) + ']}';
        }
        else if (type === 'event') {
            message = '{ "status": "eventChange", "events": [' + JSON.stringify(item) + ']}';
        }
        else if (type === 'setting') {
            message = '{ "status": "settingChange", "settings": [' + JSON.stringify(item) + ']}';
        }
        else if (type == 'checkuser') {
            message = '{ "status" : "checkuser;' + item + '"}';
        }
        else if (type === 'adduser') {
            message = '{ "status": "adduser", "iduser": "' + this.userId + '", "items": ' + item + '}';
        }
        else if (type === 'edituser') {
            message = '{ "status": "edituser", "iduser": "' + this.userId + '", "items": ' + item + '}';
        }
        else if (type === 'deleteuser') {
            message = '{ "status": "deleteuser", "iduser": "' + this.userId + '", "items": ' + item + '}';
        }
        //console.log('message: ' + message);
        this.socketSend.send((message));
    };
    // Первоначальная загрузка и распределение данных по локальным массивам
    WebsocketService.prototype.getItems = function () {
        var _this = this;
        this.getRooms().subscribe(function (items) {
            _this.roomsArr = items;
            _this.roomsChange.next(items);
        });
        this.getSettings().subscribe(function (items) {
            _this.settingsArr = items;
            _this.settingsChange.next(items);
        });
        this.getEvents().subscribe(function (items) {
            _this.eventsArr = items;
            _this.eventsChange.next(items);
        });
        // this.getUsers().subscribe((items) => {
        //   this.usersArr = items;
        //   this.usersChange.next(items);
        // });
        this.getScenes().subscribe(function (items) {
            _this.scenesArr = items;
            _this.scenesChange.next(items);
        });
    };
    // Observable для массива rooms
    WebsocketService.prototype.getRooms = function () {
        return this.http.get('assets/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var rooms = data['rooms'];
            return rooms.map(function (item) {
                return item;
            });
        }));
    };
    WebsocketService.prototype.getScenes = function () {
        return this.http.get('assets/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var scenes = data['scenes'];
            return scenes.map(function (item) {
                return item;
            });
        }));
    };
    // Observable для массива settings
    WebsocketService.prototype.getSettings = function () {
        return this.http.get('assets/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var settings = data['settings'];
            return settings.map(function (item) {
                return item;
            });
        }));
    };
    // Observable для массива events
    WebsocketService.prototype.getEvents = function () {
        return this.http.get('assets/data.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var events = data['events'];
            return events.map(function (item) {
                return item;
            });
        }));
    };
    WebsocketService.prototype.getColor = function () {
        return this.panelColor;
    };
    WebsocketService.prototype.setColor = function (color) {
        this.colorChange.next(color);
        localStorage.setItem('panelColor', color);
    };
    // Изменение поля status элемента и отправка по WebSocket
    WebsocketService.prototype.onChangeStatus = function (item, type) {
        var itemCop = item;
        if (itemCop.status === 'off') {
            itemCop.status = 'on';
        }
        else if (itemCop.status === 'on') {
            itemCop.status = 'off';
        }
        //console.log(type);
        this.wsSend(itemCop, type);
    };
    // Изменение поля value элемента и отправка по WebSocket
    WebsocketService.prototype.onChangeValue = function (item, value, status) {
        item.value = value;
        this.wsSend(item, status);
    };
    WebsocketService.prototype.onChangeItem = function (item, type) {
        this.wsSend(item, type);
    };
    WebsocketService.prototype.changeElement = function (item) {
        var _this = this;
        this.roomsArr.forEach(function (itemEl, index) {
            if (itemEl.id === item.id) {
                _this.roomsArr[index] = item;
                _this.roomsChange.next(_this.roomsArr);
                return;
            }
        });
    };
    // Получение id Клиента
    WebsocketService.prototype.getUserId = function () {
        return this.userId;
    };
    WebsocketService.prototype.getServerUrl = function () {
        return this.serverUrl;
    };
    // Изменение id Клиента
    WebsocketService.prototype.setUserId = function (userId) {
        this.userId = userId;
        localStorage.setItem('userId', userId);
        //console.log('setUserID');
        //console.log(this.userId);
        location.reload();
    };
    // Генерация id Клиента при первом входе
    WebsocketService.prototype.generateUserId = function () {
        var id;
        var date = new Date();
        var random = Math.ceil((Math.random() * 1000));
        id = '' + date.getDay() + date.getHours() + date.getMinutes() + date.getSeconds() + random;
        this.userId = id;
        localStorage.setItem('userId', id);
    };
    WebsocketService.prototype.saveServerUrl = function (serverUrl) {
        this.socketGet.close();
        this.socketSend.close();
        localStorage.setItem('serverUrl', serverUrl);
        this.startWebSocket();
    };
    WebsocketService.prototype.addNewUser = function (user, dashboard) {
        var response = '[{"id":"' + user + '", "dashboard":"' + dashboard + '"}]';
        this.wsSend(response, 'adduser');
    };
    WebsocketService.prototype.editUser = function (newUserId, oldUserId, dashboard) {
        var response = '[{"id":"' + newUserId + '", "dashboard":"' + dashboard + '", "old_id":"' + oldUserId + '"}]';
        this.wsSend(response, 'edituser');
    };
    WebsocketService.prototype.deleteUser = function (userId, dashboard) {
        var response = ' [{"id":"' + userId + '", "dashboard":"' + dashboard + '"}]';
        this.wsSend(response, 'deleteuser');
    };
    WebsocketService.prototype.reconnectToServer = function () {
        this.startWebSocket();
    };
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [],
            bootstrap: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    ws: 'ws://127.0.0.1:8000',
    hmr: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/owner/projects/demostand/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map