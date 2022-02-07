import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  template: '<h1>Hola hola</h1>',
  //templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
