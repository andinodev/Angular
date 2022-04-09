import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input('txt') msg:string

  @Output() alertClicked: EventEmitter<string>

  constructor() {
    this.msg = 'No hay alertas nuevas' 
    this.alertClicked = new EventEmitter()


  }

  ngOnInit(): void {
    
  }

  onClick(){
    this.alertClicked.emit('Alerta clickeada')
  }


}
