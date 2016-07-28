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
var list_component_1 = require('./components/list/list.component');
var list_add_component_1 = require('./components/list/list-add.component');
var AppComponent = (function () {
    function AppComponent() {
        this.lists = [
            {
                name: 'Next',
                todos: [
                    { text: 'do something', done: false },
                    { text: 'do other thing', done: false }
                ]
            },
            {
                name: 'Icebox',
                todos: [
                    { text: 'clean the garage', done: false },
                    { text: 'clean everything', done: false }
                ]
            }
        ];
    }
    AppComponent.prototype.listAdded = function (event) {
        this.lists.push(event.list);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            directives: [list_component_1.ListComponent, list_add_component_1.ListAddComponent],
            template: "\n    <div class=\"row\">\n      <div class=\"col-sm-3\" *ngFor=\"let list of lists\">\n          <my-list [list]=\"list\"></my-list> \n      </div>\n\n      <div class=\"col-sm-3\">\n        <add-list (listsUpdate)=\"listUpdated($event)\"></add-list>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map