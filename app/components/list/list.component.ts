import { Component, Input } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { List } from '../../shared/interfaces/List';
import { Todo } from '../../shared/interfaces/Todo';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  moduleId: module.id,
  selector: 'my-list',
  directives: [TodoComponent, Dragula],
  viewProviders: [DragulaService],
  template: `
    <div class="list-box">
      <div class="list-box-title">
        {{ list.name }} 
      </div>

      <div *ngIf="list.todos">
      <div *ngFor="let todo of list.todos" [dragula]='"first-bag"'>
        <my-todo [todo]="todo" (todoDeleted)="handleTodoDelete($event)"></my-todo>
      </div>
      </div>

      <div class="new-todo-form">
        <form>
          <input #todoForm type="text" class="form-control" placeholder="What's up?"
             (keyup.enter)="addTodo(todoForm.value);todoForm.value=''">
        </form>
      </div>
    </div>
  `,
  styles: [`
    .list-box   {
      cursor: move;
      cursor: grab;
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

  handleTodoDelete(event) {
    const index = this.list.todos.indexOf(event.todo);
    this.list.todos.splice(index, 1);
  }

}