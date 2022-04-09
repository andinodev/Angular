import { Component } from '@angular/core';
import { Carrito } from './models/carrito/carrito.model';
import { Producto } from './models/producto/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  money: Intl.NumberFormat = new Intl.NumberFormat('es-CL',
  { style:'currency', currency: 'CLP' });

  title = 'cajaRegistradora';
  carrito: Carrito[] = []
  products: Producto[] = []
  total: string = '$0'
  tmptotal: number = 0

  constructor(){
  }

  addProduct($event:Producto){
    this.products.push($event)
    this.tmptotal = 0
    let result = this.products.filter((word:Producto)=>word.name == $event.name)

    if(result.length === 1){
      let product = new Carrito($event,1,this.money.format($event.price))
      this.carrito.push(product)
    }else{
      let index = this.carrito.findIndex((w:Carrito) => w.product == $event)
      console.log(index,result.length)
      this.carrito[index].cantity = result.length
      this.carrito[index].total = this.money.format($event.price * result.length)
      
    }
    
    this.products.forEach((product:Producto)=>{
      console.log('be: '+this.tmptotal)
      this.tmptotal += product.price
      console.log('af: '+this.tmptotal)
    })
    this.total = this.money.format(this.tmptotal)
      
  }


}
