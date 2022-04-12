import { Producto } from "../producto/producto.model";

export class Carrito{
    product: Producto
    cantity: number = 0
    total:number = 0
    
    constructor(product:Producto, cantity:number = 0, total:number = 0){
        this.cantity = cantity
        this.product = product
        this.total = total
    }
}