export class Producto{

    name:string = ''
    price:number = 0.0
    img:string
    type:number

    constructor(name:string = '',price:number = 0.0,img:string = 'https://dummyimage.com/300x300/000/fcfcfc.png&text=%C2%A1Ups!',type = 1){
        this.name = name
        this.price = price
        this.img = img
        this.type = type
    }
    
}