import { Component } from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoDataService]
})
export class AppComponent {

  //newTodo : Todo = new Todo();

  constructor (private todoDataService : TodoDataService){

  }

  onAddTodo(todo: Todo){
    this.todoDataService.addTodo(todo);
  }

  // addTodo(){
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

  onToggleTodoComplete(todo:Todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo:Todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(){
    return this.todoDataService.getAllTodos();
  }

}
