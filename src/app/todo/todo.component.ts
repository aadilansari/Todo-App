import { Component, OnInit } from '@angular/core';
import { Todo } from './../model/Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todos : Todo[];
  txtjob="";

  ngOnInit(): void {

    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }
  
  toggleDone(id){
  this.todos.map((v, i) => {
    if (i==id) v.completed = !v.completed;
    return v;
  })
  }

  deleteTodo(id){
    this.todos = this.todos.filter(( v, i) => i!== id);
  }

  Add(txtjob){
    this.todos.push({
      content: this.txtjob,
      completed: false
    });
    this.txtjob="";
  }
   

}
