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
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
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
        console.log(event);
        this.lists.push(event.list);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            directives: [list_component_1.ListComponent, list_add_component_1.ListAddComponent, ng2_dragula_1.Dragula],
            viewProviders: [ng2_dragula_1.DragulaService],
            template: " \n    <div class=\"row\">\n      <div class=\"col-sm-3 list-group\" \n        *ngFor=\"let list of lists\"\n        [dragula]=\"'list-group'\">\n          <my-list [list]=\"list\"></my-list> \n      </div>\n\n      <div class=\"col-sm-3\">\n        <add-list (listsUpdate)=\"listAdded($event)\"></add-list>\n      </div>\n    </div>\n  ",
            styles: ["\n    .list-group {\n      min-height: 100px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map