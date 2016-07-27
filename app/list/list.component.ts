import { Component, Input } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { List } from '../shared/interfaces/List';
import { Todo } from '../shared/interfaces/Todo';

@Component({
  moduleId: module.id,
  selector: 'my-list',
  directives: [TodoComponent],
  template: `
    <div class="list-box">
      <div class="list-box-title">
        {{ list.name }} 
      </div>

      <div *ngFor="let todo of list.todos">
        <my-todo [todo]="todo"></my-todo>
      </div>

      <div class="new-todo-form">
        <form>
          <input #todo type="text" class="form-control" placeholder="What's up?"
             (keyup.enter)="addTodo(todo.value)">
        </form>
      </div>
    </div>
  `,
  styles: [`
    .list-box   {
      cursor: pointer;
      background: #F2F2F2;
      border-radius: 3px;
      padding: 10px;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.25);
      max-width: 300px;
    }
    .list-box-title   {
      margin-bottom: 8px;
    }
    .new-todo-form input {
      font-size: 16px;
      padding-left: 10px;
      padding-right: 10px;
    }
  `]
})
export class ListComponent {
  @Input() list: List;

  updateList(list: List) {

  }

  deleteList(list: List) {

  }

  addTodo(text: string) {
    this.list.todos.push({ text: text, done: false });
  }

  deleteTodo(todo: Todo) {
    
  }

}