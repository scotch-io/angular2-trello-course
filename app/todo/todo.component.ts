import { Component, Input, ElementRef } from '@angular/core';
import { Todo } from '../shared/interfaces/Todo';
import { ClickOutside } from 'ng2-click-outside'

@Component({
  moduleId: module.id,
  selector: 'my-todo',
  directives: [ClickOutside],
  template: `
    <div class="todo-box" (clickOutside)="closeDropdown($event)">
      <input [(ngModel)]="todo.text"
        (keyup.enter)="saveTodo(todo.text)"
        (blur)="saveTodo(todo.text)">

      <a href="#" class="todo-action-link" 
        (click)="dropdownVisible = !dropdownVisible">
        ...
      </a>
  
      <ul class="todo-dropdown" *ngIf="dropdownVisible">
        <li><a href="#">Something</a></li>
        <li><a href="#">Something</a></li>
        <li><a href="#">Delete</a></li>
      </ul>
    </div>
  `,
  styles: [`
    .todo-box   {
      background: #FFF;
      box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);
      padding: 5px 10px;
      margin-bottom: 8px;
      position: relative;
    }    
    .todo-action-link   {
      position: absolute;
      right: 5px;
      top: 5px;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      padding-left: 5px;
      padding-right: 5px;
      color: #BBB;
    }
    input   {
      border: none;
      background: none;
    }
    input:active,
    input:focus   {
      outline: none;
    }
    .todo-dropdown   {
      background: rgba(0, 0, 0, 0.75);
      border-radius: 4px;
      position: absolute;
      left: 88%;
      top: 88%;
      margin: 0;
      padding: 5px 10px;
      z-index: 9999;
    }
    .todo-dropdown li   {
      list-style: none; 
    }
    .todo-dropdown a     {
      color: #FFF;
      padding: 3px 0;
      margin-bottom: 5px;
      font-size: 12px;
    }
  `]
})
export class TodoComponent {
  @Input() todo: Todo;
  dropdownVisible: boolean = false;

  editTodo(todo: Todo) {

  }

  saveTodo(todo: Todo) {

  }

  deleteTodo(todo: Todo) {

  }

  closeDropdown(event) {
    this.dropdownVisible = false;
  }

}