import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todo = ''
  tarea: any[] = []
  addTodo() {
    if(this.todo != ''){
      this.tarea = [...this.tarea, this.todo]//crea un nuevo array con lo que tuviera this.tarea+this.todo
      this.todo = ''
      }
  }
  delTodo(todoCompletado: number){
    /*this.tarea = this.tarea.filter(todo => todo != todoCompletado)*/
    this.tarea.splice(todoCompletado,1)
  }

}
