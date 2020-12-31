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
      //  console.log(todos)
    //  this.todos.forEach(todo=>  console.log(todo.completed));
      
     }
   );
  }
deleteTodo(todo:Todo){
  this.todoService.deleteTodo(todo).subscribe(()=>{
  
  this.todos=this.todos.filter(t=>t._id!==todo._id);

  });
  // console.log(todo)
}
addTodo(todo:any){
  this.todoService.addTodo(todo).subscribe(todo=>{
    this.todos.push(todo);
  })
}
}
