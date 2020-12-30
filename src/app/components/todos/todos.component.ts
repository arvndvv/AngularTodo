import { Component, OnInit,  } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  
})
export class TodosComponent implements OnInit {
todos:Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
   this.todoService.getTodos().subscribe(
     todos=>{
       this.todos=todos;
     }
   );
  }
deleteTodo(todo:Todo){
  this.todoService.deleteTodo(todo).subscribe(()=>{
  
  this.todos=this.todos.filter(t=>t.id!==todo.id);

  });
  console.log(todo)
}
addTodo(todo:any){
  this.todoService.addTodo(todo).subscribe(todo=>{
    this.todos.push(todo);
  })
}
}
