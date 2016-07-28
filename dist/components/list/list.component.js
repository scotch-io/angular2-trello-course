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
var todo_component_1 = require('../todo/todo.component');
var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.updateList = function (list) {
    };
    ListComponent.prototype.deleteList = function (list) {
    };
    ListComponent.prototype.addTodo = function (text) {
        this.list.todos.push({ text: text, done: false });
        text = '';
    };
    ListComponent.prototype.deleteTodo = function (todo) {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListComponent.prototype, "list", void 0);
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-list',
            directives: [todo_component_1.TodoComponent],
            template: "\n    <div class=\"list-box\">\n      <div class=\"list-box-title\">\n        {{ list.name }} \n      </div>\n\n      <div *ngFor=\"let todo of list.todos\">\n        <my-todo [list]=\"list\" [todo]=\"todo\"></my-todo>\n      </div>\n\n      <div class=\"new-todo-form\">\n        <form>\n          <input #todo type=\"text\" class=\"form-control\" placeholder=\"What's up?\"\n             (keyup.enter)=\"addTodo(todo.value)\">\n        </form>\n      </div>\n    </div>\n  ",
            styles: ["\n    .list-box   {\n      cursor: move;\n      cursor: grab;\n      background: #F2F2F2;\n      border-radius: 3px;\n      padding: 10px;\n      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.25);\n      max-width: 300px;\n    }\n    .list-box-title   {\n      margin-bottom: 8px;\n    }\n    .new-todo-form input {\n      font-size: 16px;\n      padding-left: 10px;\n      padding-right: 10px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map