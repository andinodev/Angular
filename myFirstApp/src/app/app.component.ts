import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  campoTexto: string

  tasks: Tarea[] = []
  
  activeSemaforo:boolean = true

  constructor(){
    this.campoTexto = '';
  }
  
  ngOnInit(){
    //console.log(this.personasService.getAll(true))
  }
  onAlertClicked($event:any){
    console.log('Atención... '+$event)
  }

  onSemaforo(){
    this.activeSemaforo = !this.activeSemaforo
  }
  onTaskCreated($event:any){
    this.tasks.push($event)
    
    console.log(this.tasks)
  }

  title = 'myFirstApp';
}
