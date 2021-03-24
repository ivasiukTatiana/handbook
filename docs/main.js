(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\">\n  <div class=\"sticky-top\">\n    <app-header></app-header>\n  </div>\n\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/canvas/canvas.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/canvas/canvas.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap-container\">\n\n  <div class=\"content-container\">\n    <div class=\"content\">\n      <div class=\"article mat-elevation-z4\">\n        <section *ngIf=\"wholeContent[0] !== undefined\">\n          <h3 [id]=\"wholeContent[0].id\">{{ wholeContent[0].title }}</h3>\n          <html-outlet [htmlArticle]=\"wholeContent[0].article\" [styleArticle]=\"styleContent\"></html-outlet>\n        </section>\n      </div>\n\n      <div class=\"article mat-elevation-z4\">\n        <h3>Методи і властивості HTML5 Canvas 2d API.</h3>\n        <section *ngFor=\"let item of wholeContent; let i=index\">\n          <ng-container *ngIf=\"i>0\">\n            <h3 [id]=\"item.id\">{{ item.title }}</h3>\n            <html-outlet [htmlArticle]=\"item.article\" [styleArticle]=\"styleContent\"></html-outlet>\n          </ng-container>\n        </section>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n\n  <div class=\"nav-container\" >\n    <div class=\"nav-container-sticky mat-elevation-z4\">\n      <mat-nav-list>\n        <mat-list-item>\n            <a matLine href=\"canvas#canvas0\">&bull; HTML5 елемент &lt;canvas&gt;</a>\n        </mat-list-item>\n        <h3 mat-subheader>HTML5 Canvas 2d API:</h3>\n        <ng-container *ngFor=\"let item of wholeContent; let i=index\">\n          <mat-list-item *ngIf=\"i>0\">\n            <a matLine [href]=\"item.href\">&bull; {{ item.title }}</a>\n          </mat-list-item>\n        </ng-container>\n      </mat-nav-list>\n    </div>\n  </div>\n\n  <div class=button-container>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"button with a menu\" class=\"menu-button mat-elevation-z4\">\n        <mat-icon>menu</mat-icon>\n    </button>\n\n    <mat-menu #menu=\"matMenu\" [class]=\"'backdrop'\">\n      <button mat-menu-item *ngFor=\"let item of wholeContent\">\n        <a [href]=\"item.href\"> &bull; {{ item.title }}</a>\n      </button>\n    </mat-menu>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap-container\">\n\n  <div class=\"content-container\">\n    <div class=\"content\">\n      <div *ngFor=\"let item of wholeContent\" class=\"article mat-elevation-z4\">\n        <h3 [id]=\"item.id\">{{ item.title }}</h3>\n        <section>\n          <html-outlet [htmlArticle]=\"item.article\" [styleArticle]=\"styleContent\"></html-outlet>\n        </section>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n\n  <div class=\"nav-container\" >\n    <div class=\"nav-container-sticky mat-elevation-z4\">\n      <mat-nav-list>\n       <mat-list-item *ngFor=\"let item of wholeContent\">\n            <a matLine [href]=\"item.href\">&bull; {{ item.title }}</a>\n        </mat-list-item>\n      </mat-nav-list>\n    </div>\n  </div>\n\n  <div class=button-container>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"button with a menu\" class=\"menu-button mat-elevation-z4\">\n        <mat-icon>menu</mat-icon>\n    </button>\n\n    <mat-menu #menu=\"matMenu\" [class]=\"'backdrop'\">\n      <button mat-menu-item *ngFor=\"let item of wholeContent\">\n        <a [href]=\"item.href\"> &bull; {{ item.title }}</a>\n      </button>\n    </mat-menu>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer-container\">\n  <p>Цей довідник створено з навчальною метою.<br>Викладена інформація охоплює базові поняття і не розкриває теми у повному обсязі.</p>\n  <p class=\"copyright\">Copyright&nbsp;&copy;&nbsp;2019</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"mat-elevation-z12\">\n  <img [src]=\"activeHeaderNav.headerImg\" alt=\"\">\n  <span class=\"header-nav\">\n    <a routerLink=\"/\"><i>{{ activeHeaderNav.headerEn }}</i> {{ activeHeaderNav.headerUk }}</a>\n  </span>\n  <span class=\"spacer\"></span>\n\n  <a *ngFor=\"let item of headerNav\"\n    mat-button [routerLink]=\"item.headerLink\"\n    (click)=\"onRouterClick(item.headerId)\"\n    routerLinkActive=\"activeRouter\"\n    class=\"mat-elevation-z1\"> {{ item.headerNav }} </a>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/canvas/canvas.component.ts");





var routes = [
    { path: '', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'html', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'css', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'js', component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'canvas', component: _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__["CanvasComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXG15XFxoYW5kYm9va1xcaGFuZGJvb2svc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5LXRvcCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcbiIsIi5zdGlja3ktdG9wIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'handbook';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _directives_html_outlet_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/html-outlet.directive */ "./src/app/directives/html-outlet.directive.ts");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/canvas/canvas.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_14__["ContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _directives_html_outlet_directive__WEBPACK_IMPORTED_MODULE_16__["HtmlOutletDirective"],
                _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_17__["CanvasComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                //MatSidenavModule,
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/canvas/canvas.component.scss":
/*!**********************************************!*\
  !*** ./src/app/canvas/canvas.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap-container {\n  display: flex;\n  color: #000080;\n}\n\n.nav-container {\n  background-color: #fafafa;\n  margin-bottom: 4px;\n}\n\n.nav-container .nav-container-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 60px;\n  height: calc(100vh - 64px);\n  overflow-y: auto;\n}\n\n.nav-container .mat-list-item {\n  height: 32px !important;\n  font-size: 0.9rem;\n  color: #000080;\n}\n\n::ng-deep .backdrop {\n  background-color: #fafafa;\n}\n\n.mat-menu-item {\n  height: 32px !important;\n  font-size: 0.9rem;\n}\n\n.mat-menu-item a {\n  color: #000080;\n  text-decoration: none;\n}\n\n.button-container {\n  background: #f2f2f2;\n}\n\n.content-container {\n  flex-grow: 3;\n  height: calc(100vh - 60px);\n  background: #f2f2f2;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  overflow: auto;\n  padding-top: 60px;\n  margin-top: -60px;\n  margin-bottom: 0;\n}\n\n.content-container .content {\n  height: calc(100% - 55px);\n  overflow-y: scroll;\n  padding-top: 60px;\n  margin-top: -60px;\n  margin-bottom: 4px;\n}\n\n.content-container .content .article {\n  padding: 6px;\n}\n\n.content-container .content .article h3 {\n  margin: 6px;\n  padding-top: 80px;\n  margin-top: -60px;\n}\n\n.content-container .content .article section {\n  margin-bottom: 1.5rem;\n}\n\n@media (min-width: 960px) {\n  .button-container {\n    display: none;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 960px) {\n .wrap-container {\n  display: block;\n  }\n\n  .nav-container {\n    display: none;\n  }\n\n  .menu-button {\n    right: 4px;\n    position: absolute;\n    top: 60px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 860px) {\n  .content-container {\n    padding-top: 48px;\n    margin-top: -48px;\n   height: calc(100vh - 48px);\n   }\n  .content-container .content {\n    padding-top: 48px;\n    margin-top: -48px;\n  }\n  .content-container .content .article h3 {\n    padding-top: 56px;\n    margin-top: -48px;\n  }\n\n  .menu-button {\n    top: 48px;\n  }\n}\n\n@media (min-width: 580px) and (max-width: 680px) {\n  .content-container {\n    font-size: 0.8rem;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 580px) {\n  .content-container {\n    font-size: 0.6rem;\n  }\n\n  .menu-button .mat-icon {\n    width: 18px;\n    height: 18px;\n  }\n  .menu-button .material-icons {\n    font-size: 18px;\n  }\n}\n\n.mat-subheader {\n  color: #000080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzL0M6XFxteVxcaGFuZGJvb2tcXGhhbmRib29rL3NyY1xcYXBwXFxjb250ZW50XFxjb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW52YXMvQzpcXG15XFxoYW5kYm9va1xcaGFuZGJvb2svc3JjXFxhcHBcXGNhbnZhc1xcY2FudmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLGNBSk07QUNFUjs7QURLQTtFQUNFLHlCQVRpQjtFQVVqQixrQkFBQTtBQ0ZGOztBRElFO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXJCSTtBQ2tCUjs7QURPQTtFQUNFLHlCQUFBO0FDSkY7O0FET0E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FDSkY7O0FES0U7RUFDRSxjQWpDSTtFQWtDSixxQkFBQTtBQ0hKOztBRE9BO0VBQ0UsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURNRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE1JO0VBQ0UsWUFBQTtBQ0pOOztBRE1NO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKUjs7QURPTTtFQUNFLHFCQUFBO0FDTFI7O0FEWUE7RUFDRTtJQUNFLGFBQUE7RUNURjtBQUNGOztBRFlBO0VBQ0U7SUFDRSxhQUFBO0VDVkY7O0VEWUE7SUFDRSxnQkFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSxTQUFBO0VDVEY7QUFDRjs7QURZQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQ1ZGO0VEWUU7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VDVko7RURZSTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUNWTjs7RURlQTtJQUNFLFNBQUE7RUNaRjtBQUNGOztBRGVBO0VBQ0U7SUFDRSxpQkFBQTtFQ2JGO0FBQ0Y7O0FEZ0JBO0VBQ0U7SUFDRSxpQkFBQTtFQ2RGOztFRGtCRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDZko7RURpQkU7SUFDRSxlQUFBO0VDZko7QUFDRjs7QUNwSEE7RUFDRSxjRkZNO0FDd0hSIiwiZmlsZSI6InNyYy9hcHAvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiRjb2xvcjogIzAwMDA4MDtcclxuXHJcbi53cmFwLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbn1cclxuXHJcbi5uYXYtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gIC5uYXYtY29udGFpbmVyLXN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2NTZweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG5cclxuICAubWF0LWxpc3QtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYmFja2Ryb3Age1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxufVxyXG5cclxuLm1hdC1tZW51LWl0ZW0ge1xyXG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGEge1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kIDogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yLCAzJSk7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgZmxleC1ncm93OiAzO1xyXG4gIGhlaWdodDogNjYwcHg7XHJcbiAgYmFja2dyb3VuZCA6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvciwgMyUpO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MDhweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gICAgLmFydGljbGUge1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9mb3IgcmVzcG9uc2l2ZSBkZXNpZ25cclxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLm5hdi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm1lbnUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDhweDtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0OHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNDhweDtcclxuXHJcbiAgICAgIC5hcnRpY2xlIGgzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUtYnV0dG9uIHtcclxuICAgIHRvcDogNDRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1ODBweCkgYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAubWVudS1idXR0b24ge1xyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgIH1cclxuICAgIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLndyYXAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMwMDAwODA7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1jb250YWluZXItc3RpY2t5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA2MHB4O1xuICBoZWlnaHQ6IDY1NnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm5hdi1jb250YWluZXIgLm1hdC1saXN0LWl0ZW0ge1xuICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjMDAwMDgwO1xufVxuXG46Om5nLWRlZXAgLmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ubWF0LW1lbnUtaXRlbSBhIHtcbiAgY29sb3I6ICMwMDAwODA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDM7XG4gIGhlaWdodDogNjYwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuY29udGVudCB7XG4gIGhlaWdodDogNjA4cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQgLmFydGljbGUge1xuICBwYWRkaW5nOiA2cHg7XG59XG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQgLmFydGljbGUgaDMge1xuICBtYXJnaW46IDZweDtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50IC5hcnRpY2xlIHNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLm5hdi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWVudS1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gICAgbWFyZ2luLXRvcDogLTQ4cHg7XG4gIH1cbiAgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgICBtYXJnaW4tdG9wOiAtNDhweDtcbiAgfVxuICAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQgLmFydGljbGUgaDMge1xuICAgIHBhZGRpbmctdG9wOiA1NnB4O1xuICAgIG1hcmdpbi10b3A6IC00OHB4O1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uIHtcbiAgICB0b3A6IDQ0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1ODBweCkgYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cblxuICAubWVudS1idXR0b24gLm1hdC1pY29uIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gIH1cbiAgLm1lbnUtYnV0dG9uIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4ubWF0LXN1YmhlYWRlciB7XG4gIGNvbG9yOiAjMDAwMDgwO1xufSIsIkBpbXBvcnQgJy4uL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG4ubWF0LXN1YmhlYWRlciB7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/canvas/canvas.component.ts":
/*!********************************************!*\
  !*** ./src/app/canvas/canvas.component.ts ***!
  \********************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contents.service */ "./src/app/services/contents.service.ts");



var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(contentsService) {
        this.contentsService = contentsService;
        this.styleContent = {};
        this.wholeContent = [];
    }
    CanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentsService.getStyle().subscribe(function (data) {
            _this.styleContent = data;
        });
        this.contentsService.getContent('contentcanvas').subscribe(function (data) {
            _this.wholeContent = data;
        });
    };
    CanvasComponent.ctorParameters = function () { return [
        { type: _services_contents_service__WEBPACK_IMPORTED_MODULE_2__["ContentsService"] }
    ]; };
    CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./canvas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/canvas/canvas.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./canvas.component.scss */ "./src/app/canvas/canvas.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contents_service__WEBPACK_IMPORTED_MODULE_2__["ContentsService"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/content.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap-container {\n  display: flex;\n  color: #000080;\n}\n\n.nav-container {\n  background-color: #fafafa;\n  margin-bottom: 4px;\n}\n\n.nav-container .nav-container-sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 60px;\n  height: calc(100vh - 64px);\n  overflow-y: auto;\n}\n\n.nav-container .mat-list-item {\n  height: 32px !important;\n  font-size: 0.9rem;\n  color: #000080;\n}\n\n::ng-deep .backdrop {\n  background-color: #fafafa;\n}\n\n.mat-menu-item {\n  height: 32px !important;\n  font-size: 0.9rem;\n}\n\n.mat-menu-item a {\n  color: #000080;\n  text-decoration: none;\n}\n\n.button-container {\n  background: #f2f2f2;\n}\n\n.content-container {\n  flex-grow: 3;\n  height: calc(100vh - 60px);\n  background: #f2f2f2;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  overflow: auto;\n  padding-top: 60px;\n  margin-top: -60px;\n  margin-bottom: 0;\n}\n\n.content-container .content {\n  height: calc(100% - 55px);\n  overflow-y: scroll;\n  padding-top: 60px;\n  margin-top: -60px;\n  margin-bottom: 4px;\n}\n\n.content-container .content .article {\n  padding: 6px;\n}\n\n.content-container .content .article h3 {\n  margin: 6px;\n  padding-top: 80px;\n  margin-top: -60px;\n}\n\n.content-container .content .article section {\n  margin-bottom: 1.5rem;\n}\n\n@media (min-width: 960px) {\n  .button-container {\n    display: none;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 960px) {\n  .wrap-container {\n  display: block;\n  }\n\n  .nav-container {\n    display: none;\n  }\n\n  .menu-button {\n    right: 4px;\n    position: absolute;\n    top: 60px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 860px) {\n  .content-container {\n    padding-top: 48px;\n    margin-top: -48px;\n  height: calc(100vh - 48px);\n  }\n  .content-container .content {\n    padding-top: 48px;\n    margin-top: -48px;\n  }\n  .content-container .content .article h3 {\n    padding-top: 56px;\n    margin-top: -48px;\n  }\n\n  .menu-button {\n    top: 48px;\n  }\n}\n\n@media (min-width: 580px) and (max-width: 680px) {\n  .content-container {\n    font-size: 0.8rem;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 580px) {\n  .content-container {\n    font-size: 0.6rem;\n  }\n\n  .menu-button .mat-icon {\n    width: 18px;\n    height: 18px;\n  }\n  .menu-button .material-icons {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9DOlxcbXlcXGhhbmRib29rXFxoYW5kYm9vay9zcmNcXGFwcFxcY29udGVudFxcY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLGNBSk07QUNFUjs7QURLQTtFQUNFLHlCQVRpQjtFQVVqQixrQkFBQTtBQ0ZGOztBRElFO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXJCSTtBQ2tCUjs7QURPQTtFQUNFLHlCQUFBO0FDSkY7O0FET0E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FDSkY7O0FES0U7RUFDRSxjQWpDSTtFQWtDSixxQkFBQTtBQ0hKOztBRE9BO0VBQ0UsbUJBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURNRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE1JO0VBQ0UsWUFBQTtBQ0pOOztBRE1NO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKUjs7QURPTTtFQUNFLHFCQUFBO0FDTFI7O0FEWUE7RUFDRTtJQUNFLGFBQUE7RUNURjtBQUNGOztBRFlBO0VBQ0U7SUFDRSxhQUFBO0VDVkY7O0VEWUE7SUFDRSxnQkFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSxTQUFBO0VDVEY7QUFDRjs7QURZQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQ1ZGO0VEWUU7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VDVko7RURZSTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUNWTjs7RURlQTtJQUNFLFNBQUE7RUNaRjtBQUNGOztBRGVBO0VBQ0U7SUFDRSxpQkFBQTtFQ2JGO0FBQ0Y7O0FEZ0JBO0VBQ0U7SUFDRSxpQkFBQTtFQ2RGOztFRGtCRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDZko7RURpQkU7SUFDRSxlQUFBO0VDZko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiRjb2xvcjogIzAwMDA4MDtcclxuXHJcbi53cmFwLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbn1cclxuXHJcbi5uYXYtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gIC5uYXYtY29udGFpbmVyLXN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2NTZweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG5cclxuICAubWF0LWxpc3QtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYmFja2Ryb3Age1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxufVxyXG5cclxuLm1hdC1tZW51LWl0ZW0ge1xyXG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGEge1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kIDogZGFya2VuKCRiYWNrZ3JvdW5kLWNvbG9yLCAzJSk7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgZmxleC1ncm93OiAzO1xyXG4gIGhlaWdodDogNjYwcHg7XHJcbiAgYmFja2dyb3VuZCA6IGRhcmtlbigkYmFja2dyb3VuZC1jb2xvciwgMyUpO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA2MDhweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gICAgLmFydGljbGUge1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9mb3IgcmVzcG9uc2l2ZSBkZXNpZ25cclxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLm5hdi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm1lbnUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDhweDtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0OHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNDhweDtcclxuXHJcbiAgICAgIC5hcnRpY2xlIGgzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUtYnV0dG9uIHtcclxuICAgIHRvcDogNDRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1ODBweCkgYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG5cclxuICAubWVudS1idXR0b24ge1xyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgIH1cclxuICAgIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLndyYXAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMwMDAwODA7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLm5hdi1jb250YWluZXIgLm5hdi1jb250YWluZXItc3RpY2t5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA2MHB4O1xuICBoZWlnaHQ6IDY1NnB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm5hdi1jb250YWluZXIgLm1hdC1saXN0LWl0ZW0ge1xuICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjMDAwMDgwO1xufVxuXG46Om5nLWRlZXAgLmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ubWF0LW1lbnUtaXRlbSBhIHtcbiAgY29sb3I6ICMwMDAwODA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDM7XG4gIGhlaWdodDogNjYwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50LWNvbnRhaW5lciAuY29udGVudCB7XG4gIGhlaWdodDogNjA4cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQgLmFydGljbGUge1xuICBwYWRkaW5nOiA2cHg7XG59XG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQgLmFydGljbGUgaDMge1xuICBtYXJnaW46IDZweDtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xufVxuLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50IC5hcnRpY2xlIHNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5NjBweCkge1xuICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLm5hdi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWVudS1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gICAgbWFyZ2luLXRvcDogLTQ4cHg7XG4gIH1cbiAgLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgICBtYXJnaW4tdG9wOiAtNDhweDtcbiAgfVxuICAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQgLmFydGljbGUgaDMge1xuICAgIHBhZGRpbmctdG9wOiA1NnB4O1xuICAgIG1hcmdpbi10b3A6IC00OHB4O1xuICB9XG5cbiAgLm1lbnUtYnV0dG9uIHtcbiAgICB0b3A6IDQ0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1ODBweCkgYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cblxuICAubWVudS1idXR0b24gLm1hdC1pY29uIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gIH1cbiAgLm1lbnUtYnV0dG9uIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_contents_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contents.service */ "./src/app/services/contents.service.ts");





var ContentComponent = /** @class */ (function () {
    function ContentComponent(contentsService, router) {
        var _this = this;
        this.contentsService = contentsService;
        this.router = router;
        this.styleContent = {};
        this.wholeContent = [];
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (event) {
            _this.activeLink = event.url;
        });
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentsService.getStyle().subscribe(function (data) {
            _this.styleContent = data;
        });
        var contentName;
        switch (true) {
            case this.activeLink.startsWith("/html"):
                contentName = "contenthtml";
                break;
            case this.activeLink.startsWith("/js"):
                contentName = "contentjs";
                break;
            case this.activeLink.startsWith("/css"):
                contentName = "contentcss";
                break;
            default:
                contentName = "contenthtml";
                break;
        }
        this.contentsService.getContent(contentName).subscribe(function (data) {
            _this.wholeContent = data;
        });
    };
    ContentComponent.ctorParameters = function () { return [
        { type: _services_contents_service__WEBPACK_IMPORTED_MODULE_4__["ContentsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.scss */ "./src/app/content/content.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contents_service__WEBPACK_IMPORTED_MODULE_4__["ContentsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/directives/html-outlet.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/html-outlet.directive.ts ***!
  \*****************************************************/
/*! exports provided: HtmlOutletDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlOutletDirective", function() { return HtmlOutletDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");





var HtmlOutletDirective = /** @class */ (function () {
    function HtmlOutletDirective(vcRef, compiler) {
        this.vcRef = vcRef;
        this.compiler = compiler;
    }
    HtmlOutletDirective.prototype.ngOnChanges = function () {
        var _this = this;
        var template = this.htmlArticle;
        var style = this.styleArticle;
        var DynamicArticleComponent = /** @class */ (function () {
            function DynamicArticleComponent() {
                this.canvasExamples = {
                    stroke: function (ctx) {
                        ctx.lineWidth = 10;
                        ctx.lineCap = "round";
                        ctx.strokeStyle = "green";
                        ctx.beginPath();
                        ctx.moveTo(20, 20);
                        ctx.lineTo(100, 100);
                        ctx.lineTo(125, 75);
                        ctx.stroke();
                    },
                    strokerect: function (ctx) {
                        ctx.fillStyle = "rgb(192, 192, 192)";
                        ctx.fillRect(18, 33, 89, 64);
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = "#000";
                        ctx.shadowBlur = 3;
                        ctx.shadowColor = "grey";
                        ctx.shadowOffsetX = 5;
                        ctx.shadowOffsetY = 5;
                        ctx.strokeRect(15, 30, 95, 70);
                        ctx.fillStyle = "red";
                        ctx.fillRect(13, 28, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "#000";
                        ctx.font = "italic bold 10px arial";
                        ctx.fillText('(x, y)', 7, 24);
                        ctx.fillText('height', 114, 70);
                        ctx.fillText('width', 50, 42);
                    },
                    arc: function (ctx) {
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = "#000";
                        ctx.arc(75, 75, 45, 0, Math.PI * 1.5, false);
                        ctx.stroke();
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(75, 20);
                        ctx.lineTo(75, 135);
                        ctx.moveTo(24, 75);
                        ctx.lineTo(130, 75);
                        ctx.stroke();
                        ctx.fillStyle = "red";
                        ctx.fillRect(117, 72, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "blue";
                        ctx.fillRect(73, 28, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "green";
                        ctx.fillRect(72, 72, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "#000";
                        ctx.font = "12px arial";
                        ctx.fillText('0', 137, 79);
                        ctx.fillText('0.5*PI', 55, 141);
                        ctx.fillText('1*PI', 1, 79);
                        ctx.fillText('1.5*PI', 55, 18);
                        ctx.font = "italic bold 10px arial";
                        ctx.fillText('center', 60, 70);
                        ctx.fillText('radius', 80, 85);
                        ctx.fillText('start', 117, 70);
                        ctx.fillText('end', 81, 33);
                    },
                    arcto: function (ctx) {
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = "#000";
                        ctx.beginPath();
                        ctx.moveTo(38, 32);
                        ctx.arcTo(101, 33, 105, 87, 60);
                        ctx.stroke();
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(20, 30);
                        ctx.lineTo(130, 35);
                        ctx.moveTo(100, 20);
                        ctx.lineTo(110, 130);
                        ctx.moveTo(43, 87);
                        ctx.lineTo(103, 87);
                        ctx.stroke();
                        ctx.fillStyle = "green";
                        ctx.fillRect(99, 31, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "blue";
                        ctx.fillRect(103, 85, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "red";
                        ctx.fillRect(36, 29, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "#000";
                        ctx.font = "italic bold 10px arial";
                        ctx.fillText('start', 34, 26);
                        ctx.fillText('(x1, y1)', 106, 30);
                        ctx.fillText('(x2, y2)', 110, 90);
                        ctx.fillText('radius', 55, 82);
                    },
                    quadratic: function (ctx) {
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(13, 20);
                        ctx.lineTo(20, 130);
                        ctx.lineTo(133, 20);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.fillStyle = "blue";
                        ctx.fillRect(12, 16, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "green";
                        ctx.fillRect(18, 127, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "red";
                        ctx.fillRect(128, 16, 5, 5);
                        ctx.fill();
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = "#000";
                        ctx.beginPath();
                        ctx.moveTo(15, 20);
                        ctx.quadraticCurveTo(20, 130, 130, 20);
                        ctx.stroke();
                        ctx.fillStyle = "#000";
                        ctx.font = "italic bold 10px arial";
                        ctx.fillText('start', 19, 22);
                        ctx.fillText('(endX, endY)', 85, 15);
                        ctx.fillText('(controlX, controlY)', 27, 129);
                    },
                    bezier: function (ctx) {
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(14, 20);
                        ctx.lineTo(14, 110);
                        ctx.lineTo(112, 80);
                        ctx.moveTo(131, 20);
                        ctx.lineTo(131, 110);
                        ctx.lineTo(38, 80);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.fillStyle = "blue";
                        ctx.fillRect(13, 16, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "green";
                        ctx.fillRect(12, 108, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "red";
                        ctx.fillRect(128, 16, 5, 5);
                        ctx.fill();
                        ctx.fillStyle = "orange";
                        ctx.fillRect(128, 108, 5, 5);
                        ctx.fill();
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = "#000";
                        ctx.moveTo(15, 20);
                        ctx.bezierCurveTo(20, 110, 130, 110, 130, 20);
                        ctx.stroke();
                        ctx.fillStyle = "#000";
                        ctx.font = "italic bold 10px arial";
                        ctx.fillText('start', 19, 22);
                        ctx.fillText('(endX, endY)', 85, 15);
                        ctx.fillText('(controlX1, controlY1)', 2, 122);
                        ctx.fillText('(controlX2, controlY2)', 44, 103);
                    },
                    text: function (ctx) {
                        ctx.fillStyle = 'rgba(0, 0, 128, 0.9)';
                        ctx.strokeStyle = 'rgba(128, 0, 0, 1.0)';
                        ctx.lineWidth = 2;
                        ctx.font = "bold 32px sans-serif";
                        ctx.strokeText("Привіт!", 12, 77);
                        ctx.fillText("Привіт!", 10, 75);
                    },
                    lngradient: function (ctx) {
                        var grd = ctx.createLinearGradient(5, 5, 140, 5);
                        grd.addColorStop(0, "red");
                        grd.addColorStop(0.33, "orange");
                        grd.addColorStop(0.66, "yellow");
                        grd.addColorStop(1, "lime");
                        ctx.fillStyle = grd;
                        ctx.fillRect(5, 5, 140, 140);
                    },
                    rdgradient: function (ctx) {
                        var grd = ctx.createRadialGradient(75, 150, 50, 75, 150, 170);
                        grd.addColorStop(0, "orange");
                        grd.addColorStop(0.45, "yellow");
                        grd.addColorStop(1, "aqua");
                        ctx.fillStyle = grd;
                        ctx.fillRect(5, 5, 140, 140);
                    },
                    image3: function (ctx) {
                        var img = new Image();
                        img.src = "./assets/images/imgmini.jpg";
                        img.onload = function () { return ctx.drawImage(img, 0, 0); };
                    },
                    image5: function (ctx) {
                        var img = new Image();
                        img.src = "./assets/images/imgmini.jpg";
                        img.onload = function () { return ctx.drawImage(img, 25, 25, 100, 100); };
                    },
                    image9: function (ctx) {
                        var img = new Image();
                        img.src = "./assets/images/imgmini.jpg";
                        img.onload = function () { return ctx.drawImage(img, 30, 15, 100, 50, 30, 50, 100, 50); };
                    }
                };
            }
            DynamicArticleComponent.prototype.ngAfterViewInit = function () {
                var _this = this;
                this.canvases.forEach(function (item, index) {
                    var canvas = item.nativeElement;
                    if (canvas != null && canvas.getContext) {
                        var ctx = canvas.getContext('2d');
                        if (_this.canvasExamples[canvas.id] !== undefined) {
                            _this.canvasExamples[canvas.id](ctx);
                        }
                    }
                });
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('canvas'),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
            ], DynamicArticleComponent.prototype, "canvases", void 0);
            DynamicArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'dynamic-article',
                    template: template,
                    styles: [style],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                })
            ], DynamicArticleComponent);
            return DynamicArticleComponent;
        }());
        ;
        var DynamicArticleModule = /** @class */ (function () {
            function DynamicArticleModule() {
            }
            DynamicArticleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
                    ],
                    declarations: [DynamicArticleComponent]
                })
            ], DynamicArticleModule);
            return DynamicArticleModule;
        }());
        ;
        this.compiler.compileModuleAndAllComponentsAsync(DynamicArticleModule)
            .then(function (factory) {
            var compFactory = factory.componentFactories.find(function (comp) {
                return comp.componentType === DynamicArticleComponent;
            });
            _this.vcRef.createComponent(compFactory, 0);
        });
    };
    HtmlOutletDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HtmlOutletDirective.prototype, "htmlArticle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HtmlOutletDirective.prototype, "styleArticle", void 0);
    HtmlOutletDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'html-outlet'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]])
    ], HtmlOutletDirective);
    return HtmlOutletDirective;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-container {\n  display: flex;\n  justify-content: space-between;\n  background-color: #4d1ba3;\n  font-size: 0.7rem;\n  color: #fff;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  padding: 0.2rem;\n}\n.footer-container p {\n  margin: 0.4rem 0.6rem;\n}\n.copyright {\n  align-self: center;\n  padding-right: 1rem;\n}\n@media (min-width: 320px) and (max-width: 660px) {\n  .footer-container {\n    font-size: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxteVxcaGFuZGJvb2tcXGhhbmRib29rL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUxhO0VBTWIsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0FDREY7QURFRTtFQUNFLHFCQUFBO0FDQUo7QURJQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNERjtBRElBO0VBQ0U7SUFDRSxpQkFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvb3Rlci1jb2xvcjogcmdiKDc3LCAyNywgMTYzKTtcclxuXHJcbi5mb290ZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9vdGVyLWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwLjRyZW0gMC42cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XHJcbiAgLmZvb3Rlci1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgfVxyXG59XHJcbiIsIi5mb290ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQxYmEzO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuLmZvb3Rlci1jb250YWluZXIgcCB7XG4gIG1hcmdpbjogMC40cmVtIDAuNnJlbTtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-toolbar {\n  padding-left: 0;\n  margin-bottom: 4px;\n  height: 56px;\n}\n\na {\n  text-decoration: none;\n  color: white;\n  padding-right: 0.8rem;\n  padding-left: 0.8rem;\n  font-size: 1.1rem;\n}\n\nmat-toolbar > a {\n  font-size: 1rem;\n  margin-left: 0.4rem;\n  border-radius: 5%;\n}\n\nmat-toolbar > a::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  background-color: #ccc;\n  height: 2px;\n  transform: scale(0);\n  transition: all 0.3s;\n}\n\nmat-toolbar > a:hover::after {\n  transform: scale(1);\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\nimg {\n  height: 95%;\n  margin-left: 2px;\n}\n\ni {\n  font-size: 0.9rem;\n  padding: 0 1rem;\n}\n\n.activeRouter {\n  background-color: #5c34a4;\n}\n\n/* Screen = B/w 320px to 960px */\n\n@media (min-width: 320px) and (max-width: 860px) {\n  mat-toolbar {\n    height: 44px;\n  }\n}\n\n@media (min-width: 620px) and (max-width: 900px) {\n  .header-nav a {\n    font-size: 0.9rem;\n  }\n\n  mat-toolbar > a {\n    font-size: 0.9rem;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 820px) {\n  .header-nav {\n    display: none;\n  }\n\n  mat-toolbar > a {\n    font-size: 0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxteVxcaGFuZGJvb2tcXGhhbmRib29rL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBREtBO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNDLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNIRDs7QURLQTtFQUNFLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURLQSxnQ0FBQTs7QUFDQTtFQUNFO0lBQ0UsWUFBQTtFQ0ZGO0FBQ0Y7O0FES0E7RUFDRTtJQUNFLGlCQUFBO0VDSEY7O0VES0E7SUFDRSxpQkFBQTtFQ0ZGO0FBQ0Y7O0FES0E7RUFDRTtJQUNFLGFBQUE7RUNIRjs7RURNQTtJQUNFLGlCQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLWNvbG9yOiByZ2IoMTAzLCA1OCwgMTgzKTtcclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIGhlaWdodDogNTZweDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcblxyXG59XHJcblxyXG5tYXQtdG9vbGJhciA+IGEge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG5cclxubWF0LXRvb2xiYXIgPiBhOjphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuXHRoZWlnaHQ6IDJweDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbn1cclxubWF0LXRvb2xiYXIgPiBhOmhvdmVyOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuaSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcblxyXG4uYWN0aXZlUm91dGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGhlYWRlci1jb2xvciwgNSUpO1xyXG59XHJcblxyXG4vKiBTY3JlZW4gPSBCL3cgMzIwcHggdG8gOTYwcHggKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcclxuICBtYXQtdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjIwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5oZWFkZXItbmF2IGEge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIG1hdC10b29sYmFyID4gYSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgLmhlYWRlci1uYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIG1hdC10b29sYmFyID4gYSB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcbn1cclxuIiwibWF0LXRvb2xiYXIge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG5tYXQtdG9vbGJhciA+IGEge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG5tYXQtdG9vbGJhciA+IGE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBoZWlnaHQ6IDJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbm1hdC10b29sYmFyID4gYTpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbmltZyB7XG4gIGhlaWdodDogOTUlO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuLmFjdGl2ZVJvdXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzM0YTQ7XG59XG5cbi8qIFNjcmVlbiA9IEIvdyAzMjBweCB0byA5NjBweCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcbiAgbWF0LXRvb2xiYXIge1xuICAgIGhlaWdodDogNDRweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYyMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmhlYWRlci1uYXYgYSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cblxuICBtYXQtdG9vbGJhciA+IGEge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuICAuaGVhZGVyLW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIG1hdC10b29sYmFyID4gYSB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.headerNav = [
            {
                headerId: 0,
                headerImg: "./assets/images/icon-html.gif",
                headerEn: "Hyper Text Markup Language ",
                headerUk: " мова гіпертекстової розмітки.",
                headerNav: "HTML",
                headerLink: "/html"
            },
            {
                headerId: 1,
                headerImg: "./assets/images/icon-css.gif",
                headerEn: "Cascading Style Sheets",
                headerUk: "каскадні таблиці стилів.",
                headerNav: "CSS",
                headerLink: "/css"
            },
            {
                headerId: 2,
                headerImg: "./assets/images/icon-js.gif",
                headerEn: "",
                headerUk: "JavaScript - скриптова мова програмування.",
                headerNav: "JavaScript",
                headerLink: "/js"
            },
            {
                headerId: 3,
                headerImg: "./assets/images/icon-canvas.jpg",
                headerEn: " ",
                headerUk: " Canvas - графічна область на web-сторінці.",
                headerNav: "Canvas",
                headerLink: "/canvas"
            },
        ];
        this.activeHeaderNav = this.headerNav[0];
        this.activeLink = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (event) {
            for (var i = 0; i < _this.headerNav.length; i++) {
                _this.activeLink = event.url;
                if (_this.activeLink.startsWith(_this.headerNav[i].headerLink)) {
                    _this.activeHeaderNav = _this.headerNav[i];
                }
            }
            _this.router.navigate([_this.activeHeaderNav.headerLink]);
        });
    };
    HeaderComponent.prototype.onRouterClick = function (headerId) {
        this.activeHeaderNav = this.headerNav[headerId];
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/contents.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contents.service.ts ***!
  \**********************************************/
/*! exports provided: ContentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsService", function() { return ContentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ContentsService = /** @class */ (function () {
    function ContentsService(http) {
        this.http = http;
    }
    /**
     * Method gets styles for a dynamic component from a Jason-file
     * @returns - Jason-data with styles
     */
    ContentsService.prototype.getStyle = function () {
        return this.http.get('assets/contentstore/css/style.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.css;
        }));
    };
    /**
     * Method gets data with titles and HTML templates of articles from a Jason-file
     * @param cntName - Name of Jason-file
     * @returns - Jason-data with titles and HTML templates
     */
    ContentsService.prototype.getContent = function (cntName) {
        return this.http.get("assets/contentstore/" + cntName + ".json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data[cntName];
        }));
    };
    ContentsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ContentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContentsService);
    return ContentsService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\my\handbook\handbook\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
