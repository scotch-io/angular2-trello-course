import { Component } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { List } from './shared/interfaces/List';
import { Todo } from './shared/interfaces/Todo';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  directives: [ListComponent],
  template: `
    <div class="row">
    <div class="col-sm-3" *ngFor="let list of lists">
        <my-list [list]="list"></my-list> 
    </div>
    </div>
  `
})
export class AppComponent {
  lists: List[] = [
    { 
      name: 'Next',
      todos: [
        { id: 1, text: 'do something', done: false },
        { id: 2, text: 'do other thing', done: false }
      ] 
    },
    {
      name: 'Icebox',
      todos: [
        { id: 1, text: 'clean the garage', done: false },
        { id: 2, text: 'clean everything', done: false }
      ]
    }
  ];

}
