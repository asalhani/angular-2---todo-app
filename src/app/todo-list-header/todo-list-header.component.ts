import { Component, Output, EventEmitter } from '@angular/core';
import {Todo } from '../Todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

  constructor() { }

  newTodo : Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  addTodo (){
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

 
}
