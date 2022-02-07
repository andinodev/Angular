import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  mensaje: string
  myP: string
  myInput: string
  myNames:Array<string>
  constructor() { 

    this.mensaje = 'Soy el daddy'
    this.myNames = ['text','date','number','color','file']
    this.myP = 'parrafoPrincipal'
    let aNumber = this.randomNumber(0,this.myNames.length)
    this.myInput = this.myNames[aNumber]
    
    setTimeout(()=>{
      aNumber = this.randomNumber(0,this.myNames.length)
      this.mensaje = 'Ahora te muestro a mi cabro chico'
      this.myP = 'main'
      this.myInput = this.myNames[aNumber]

    },2000)
  }

  randomNumber(min:number,max:number):number{
    return Math.floor(Math.random()*(max-min)) + min
  }
  crearSuma(a:number,b:number):number{
    return a+b
  }
  ngOnInit(): void {
  }

  crearSaludo():string{
    return 'Saludo desde un método'
  }
}
