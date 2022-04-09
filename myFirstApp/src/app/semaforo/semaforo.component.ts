import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  clases: string[] = ['semaforo', 'v']

  colorSelected: string = 'v'

  constructor() { 

    this.clases.push('redondo')
  }

  ngOnInit(): void {
    console.log(this.colorSelected)
    setInterval(()=>{
      if(this.colorSelected === 'r'){
        this.colorSelected = 'v'
      }else if(this.colorSelected === 'a'){
        this.colorSelected = 'r'
      }else if(this.colorSelected === 'v'){
        this.colorSelected = 'a'
      }
    },1000)
    console.log(this.colorSelected)
  }


}
