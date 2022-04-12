import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito/carrito.model';
import { Producto } from 'src/app/models/producto/producto.model';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styles: [
  ]
})
export class AppComponent implements OnInit {

  carrito: Carrito[] = []
  products: Producto[] = []

  constructor(){
  }

  ngOnInit(): void {
  }

  addProduct($event:Producto){
    this.products.push($event)
    let result = this.products.filter((word:Producto)=>word.name == $event.name)

    if(result.length === 1){
      let product = new Carrito($event,1,$event.price)
      this.carrito.push(product)
    }else{
      let index = this.carrito.findIndex((w:Carrito) => w.product == $event)
      console.log(index,result.length)
      this.carrito[index].cantity = result.length
      this.carrito[index].total =$event.price * result.length
      
    }

      
  }
}
