import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  @Output() taskCreated: EventEmitter<Tarea> = new EventEmitter()

  newTask: Tarea = new Tarea()

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.taskCreated.emit(this.newTask)
    this.newTask = new Tarea()
  }
}
