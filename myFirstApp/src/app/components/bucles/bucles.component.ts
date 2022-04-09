import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  personas: any[]

  constructor() {
    this.personas = [
      { nombre: 'Daniel', apellidos: 'Parra Oróstica', edad: 22,email:'daniel.parra.dipo@gmail.com',tel:'+56 9 913392255',www:'www.andinodev.com'},
      { nombre: 'Isaías', apellidos: 'Parra Oróstica', edad: 22,email:'isaias@gmail.com',tel:'+56 9 231231232',www:''},
      { nombre: 'Jesica', apellidos: 'Oróstica Orellana', edad: 50,email:'jesicao@gmail.com',tel:'+56 9 4242424425',www:''},
      { nombre: 'Natalia', apellidos: 'Parra Oróstica', edad: 30,email:'natalia@hotmail.com',tel:'+56 9 3232332423',www:''},
      { nombre: 'Juan', apellidos: 'Parra Vargas', edad: 55,email:'juanin@inlive.com',tel:'+56 9 12341241',www:''},
      { nombre: 'Daniel', apellidos: 'Parra Oróstica', edad: 22,email:'daniel.parra.dipo@gmail.com',tel:'+56 9 913392255',www:'www.andinodev.com'},
      { nombre: 'Isaías', apellidos: 'Parra Oróstica', edad: 22,email:'isaias@gmail.com',tel:'+56 9 231231232',www:''},
      { nombre: 'Jesica', apellidos: 'Oróstica Orellana', edad: 50,email:'jesicao@gmail.com',tel:'+56 9 4242424425',www:''},
      { nombre: 'Natalia', apellidos: 'Parra Oróstica', edad: 30,email:'natalia@hotmail.com',tel:'+56 9 3232332423',www:''},
      { nombre: 'Daniel', apellidos: 'Parra Oróstica', edad: 22,email:'daniel.parra.dipo@gmail.com',tel:'+56 9 913392255',www:'www.andinodev.com'},
      { nombre: 'Isaías', apellidos: 'Parra Oróstica', edad: 22,email:'isaias@gmail.com',tel:'+56 9 231231232',www:''},
      { nombre: 'Jesica', apellidos: 'Oróstica Orellana', edad: 50,email:'jesicao@gmail.com',tel:'+56 9 4242424425',www:''},
      { nombre: 'Natalia', apellidos: 'Parra Oróstica', edad: 30,email:'natalia@hotmail.com',tel:'+56 9 3232332423',www:''}
    ]
   }

  ngOnInit(): void {
  }

}
