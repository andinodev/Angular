import { Component, Input, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito/carrito.model';
import { Andinodev } from 'src/app/models/ext/andinodev';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() carrito: Carrito[] = []
  tools:Andinodev = new Andinodev()

  constructor() { }

  ngOnInit(): void {
  }

  isChange(){
    console.log('change')
  }

  getTotal(){
    let total = 0
    this.carrito.forEach((element)=>{
      total += element.total
    })
    return total
  }
}
