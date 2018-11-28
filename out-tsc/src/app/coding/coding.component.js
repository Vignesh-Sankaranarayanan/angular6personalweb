"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var returns_json_array_service_1 = require("../returns-json-array.service");
var CodingComponent = /** @class */ (function () {
    function CodingComponent(service) {
        this.service = service;
        this.coding = service.getCoding();
        debugger;
        for (var index in this.coding) {
        }
        ;
        console.log("AppComponent.coding:" + this.coding);
    }
    CodingComponent.prototype.ngOnInit = function () {
    };
    CodingComponent = __decorate([
        core_1.Component({
            selector: 'app-coding',
            templateUrl: './coding.component.html',
            styleUrls: ['./coding.component.css'],
            providers: [returns_json_array_service_1.ReturnsJsonArrayService]
        }),
        __metadata("design:paramtypes", [returns_json_array_service_1.ReturnsJsonArrayService])
    ], CodingComponent);
    return CodingComponent;
}());
exports.CodingComponent = CodingComponent;
//# sourceMappingURL=coding.component.js.map