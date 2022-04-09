import { Component, Input, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito/carrito.model';
import { Producto } from 'src/app/models/producto/producto.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  @Input() carrito: Carrito[] = []

  constructor() { }

  ngOnInit(): void {
  }

  isChange(){
    console.log('change')
  }
}
