import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  drinks: Producto[]
  food: Producto[]
  bd: any[]
  @Output() productSelected: EventEmitter<Producto> = new EventEmitter()

  money: Intl.NumberFormat = new Intl.NumberFormat('es-CL',
  { style:'currency', currency: 'CLP' });


  constructor() {
    this.drinks = [];
    this.food = [];
    this.bd = [
      ['Pizza Napolitana',10500,'https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale',1],
      ['Pizza italiana', 11300, 'https://www.recetasdesbieta.com/wp-content/uploads/2017/05/masa-de-pizza-mozzarella-1.jpg',1],
      ['Pizza de carne picada Argentina', 12000, 'https://www.comemelapizza.com/wp-content/uploads/2015/05/Pizza-de-carne-picada.jpg',1],
      ['Pizza de champiñones',14200,'https://unareceta.com/wp-content/uploads/2014/05/pizza-de-champin%CC%83ones.jpg',1],
      ['Cabernet Sauvignon Viña Maipo', 12700,'http://www.marcasmundiales.com.gt/media/k2/items/cache/6a3568ec75354456ab1e6b6fc1540ba0_M.jpg',0],
      ['Bebida variedad 1.5L',6000,'https://www.aquasushi.cl/wp-content/uploads/aqua-botellas-coca.jpg',0]
    ]
  }

  ngOnInit(): void {
    this.bd.forEach((i)=>{
      let product = new Producto(i[0],i[1],i[2],i[3])

      if(i[3] == 0){
        this.drinks.push(product)
      }else{
        this.food.push(product)
      }
    })
  }

  onClick(i:number,isDrink:boolean){
    if(isDrink){
      this.productSelected.emit(this.drinks[i])
    }else{
      this.productSelected.emit(this.food[i])
    }
  }

  moneyFormat(money:number,format:string = 'CLP'):string{
    return this.money.format(money)
  }
}
