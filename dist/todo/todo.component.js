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
var TodoComponent = (function () {
    function TodoComponent() {
        this.dropdownVisible = false;
    }
    TodoComponent.prototype.editTodo = function (todo) {
    };
    TodoComponent.prototype.saveTodo = function (todo) {
    };
    TodoComponent.prototype.deleteTodo = function (todo) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoComponent.prototype, "todo", void 0);
    TodoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-todo',
            template: "\n    <div class=\"todo-box\">\n      <input [(ngModel)]=\"todo.text\"\n        (keyup.enter)=\"saveTodo(todo.text)\"\n        (blur)=\"saveTodo(todo.text)\">\n\n      <a href=\"#\" class=\"todo-action-link\" \n        (click)=\"dropdownVisible = !dropdownVisible\">\n        ...\n      </a>\n  \n      <ul class=\"todo-dropdown\" *ngIf=\"dropdownVisible\">\n        <li><a href=\"#\">Something</a></li>\n        <li><a href=\"#\">Something</a></li>\n        <li><a href=\"#\">Delete</a></li>\n      </ul>\n    </div>\n  ",
            styles: ["\n    .todo-box   {\n      background: #FFF;\n      box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);\n      padding: 5px 10px;\n      margin-bottom: 8px;\n      position: relative;\n    }    \n    .todo-action-link   {\n      position: absolute;\n      right: 5px;\n      top: 5px;\n      background: rgba(0, 0, 0, 0.05);\n      border-radius: 4px;\n      padding-left: 5px;\n      padding-right: 5px;\n      color: #BBB;\n    }\n    input   {\n      border: none;\n      background: none;\n    }\n    input:active,\n    input:focus   {\n      outline: none;\n    }\n    .todo-dropdown   {\n      background: rgba(0, 0, 0, 0.75);\n      border-radius: 4px;\n      position: absolute;\n      left: 88%;\n      top: 88%;\n      margin: 0;\n      padding: 5px 10px;\n      z-index: 9999;\n    }\n    .todo-dropdown li   {\n      list-style: none; \n    }\n    .todo-dropdown a     {\n      color: #FFF;\n      padding: 3px 0;\n      margin-bottom: 5px;\n      font-size: 12px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map