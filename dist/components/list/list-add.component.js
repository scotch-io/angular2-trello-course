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
var core_1 = require('@angular/core');
var ng2_click_outside_1 = require('ng2-click-outside');
var ListAddComponent = (function () {
    function ListAddComponent() {
        this.listsUpdate = new core_1.EventEmitter();
        this.formVisible = false;
    }
    ListAddComponent.prototype.showForm = function () {
        this.formVisible = true;
    };
    ListAddComponent.prototype.closeForm = function (event) {
        console.log(event, 'something');
        // this.formVisible = false;
    };
    ListAddComponent.prototype.addList = function (text) {
        var newList = {
            name: text,
            todos: []
        };
        this.listsUpdate.emit(newList);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListAddComponent.prototype, "listsUpdate", void 0);
    ListAddComponent = __decorate([
        core_1.Component({
            selector: 'add-list',
            directives: [ng2_click_outside_1.ClickOutside],
            template: "\n  <div (clickOutside)=\"closeForm($event)\">\n    <div class=\"add-list-placeholder\" *ngIf=\"!formVisible\">\n      <a href=\"#\" (click)=\"showForm()\">Add a list...</a>\n    </div>\n\n    <div class=\"add-list-form\" *ngIf=\"formVisible\">\n      <form>\n        <input #newList type=\"text\" class=\"form-control\">\n      </form>\n    </div>\n  </div>\n  ",
            styles: ["\n    .add-list-placeholder   {\n      background: rgba(0, 0, 0, 0.5);\n      border-radius: 4px;\n      padding: 10px;\n      transition: 0.3s ease all;\n    }\n    .add-list-placeholder:hover {\n      cursor: pointer;\n      background: rgba(0, 0, 0, 0.65);\n    }\n    .add-list-placeholder:hover a {\n      text-decoration: none;\n    }\n    .add-list-placeholder a   {\n      color: rgba(255, 255, 255, 0.75);\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ListAddComponent);
    return ListAddComponent;
}());
exports.ListAddComponent = ListAddComponent;
//# sourceMappingURL=list-add.component.js.map