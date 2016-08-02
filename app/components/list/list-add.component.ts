import { Component, Output, EventEmitter } from '@angular/core';
import { List } from '../../shared/interfaces/List';
import { Todo } from '../../shared/interfaces/Todo';
import { ClickOutside } from 'ng2-click-outside';

@Component({
  selector: 'add-list',
  directives: [ClickOutside],
  template: `
  <div (clickOutside)="closeForm($event)">
    <div class="add-list-placeholder" *ngIf="!formVisible">
      <a href="#" (click)="showForm()">Add a list...</a>
    </div>

    <div class="add-list-form" *ngIf="formVisible">
      <form>
        <input #listForm type="text" class="form-control" 
          (keyup.enter)="addList(listForm.value);listForm.value = ''">
      </form>
    </div>
  </div>
  `,
  styles: [`
    .add-list-placeholder   {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      padding: 10px;
      transition: 0.3s ease all;
    }
    .add-list-placeholder:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.65);
    }
    .add-list-placeholder:hover a {
      text-decoration: none;
    }
    .add-list-placeholder a   {
      color: rgba(255, 255, 255, 0.75);
    }
  `]
})
export class ListAddComponent {
  @Output() listsUpdate = new EventEmitter();
  formVisible: boolean = false;

  showForm() {
    this.formVisible = true;
  }

  closeForm(event) {
    console.log(event, 'closing form', 'something');
    // if (this.formVisible)
    //   this.formVisible = false;
  }

  addList(text: string) {
    const newList: List = {
      name: text,
      todos: []
    };
    console.log(newList);
    this.listsUpdate.emit(newList);
  }
}