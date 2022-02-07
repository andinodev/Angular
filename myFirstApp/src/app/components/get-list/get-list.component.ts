import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getList',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit {

  mensaje:string
  constructor() { this.mensaje = 'Este es un div'}

  ngOnInit(): void {
  }

  onChange($event:any){
    console.log($event.target.value)
  }

  onMouseEnter(){
    this.mensaje = 'esta dentro del cuadrado'
  }

  onMouseOut(){
    this.mensaje = 'Este es un div'
  }
}
