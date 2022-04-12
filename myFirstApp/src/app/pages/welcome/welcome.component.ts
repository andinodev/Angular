import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { Tarea } from 'src/app/models/tarea.model';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PersonasService],
})
export class WelcomeComponent implements OnInit {
  campoTexto: string;

  tasks: Tarea[] = [];

  personas: Persona[] = [];
  activeSemaforo: boolean = true;

  constructor(private PersonassService: PersonasService) {
    this.campoTexto = '';
  }
  ngOnInit(): void {
    console.log(this.PersonassService.getAll());
  }

  onAddToList(){
    let persona = new Persona('Danielillo','Parrita Oróstikita',22,true)
    this.PersonassService.addWorker(persona)

    this.onClickActivos()
  }

  async onClickActivos() {
    /*
    this.PersonassService.activos()
    .then((arrTmp)=>console.log(arrTmp))
    .catch(error=>console.log(error))
    */
    try {
      this.personas = await this.PersonassService.getActive();
    } catch (error) {
      console.log(error);
    }
  }
  onAlertClicked($event: any) {
    console.log('Atención... ' + $event);
  }

  onSemaforo() {
    this.activeSemaforo = !this.activeSemaforo;
  }
  onTaskCreated($event: any) {
    this.tasks.push($event);

    console.log(this.tasks);
  }

  title = 'myFirstApp';
}
