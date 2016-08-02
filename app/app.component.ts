import { Component } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { ListAddComponent } from './components/list/list-add.component';
import { List } from './shared/interfaces/List';
import { Todo } from './shared/interfaces/Todo';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  directives: [ListComponent, ListAddComponent, Dragula],
  viewProviders: [DragulaService],
  template: ` 
    <div class="row">
      <div class="col-sm-3 list-group" 
        *ngFor="let list of lists"
        [dragula]="'list-group'">
          <my-list [list]="list"></my-list> 
      </div>

      <div class="col-sm-3">
        <add-list (listsUpdate)="listAdded($event)"></add-list>
      </div>
    </div>
  `,
  styles: [`
    .list-group {
      min-height: 100px;
    }
  `]
})
export class AppComponent {
  public lists: List[] = [
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

  listAdded(event) {
    console.log(event);
    this.lists.push(event.list);
  }

}
