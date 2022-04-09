import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  result: string
  constructor() {
    this.result = ''
  }
  
  endRegresive($event:any){
    console.log('ha finalizado el cronómetro con el número',$event)
  }

  ngOnInit(): void {
  }

  onClick(a: string, b: string) {
    let aa = Number(a)
    let bb = Number(b)
    this.result = String(this.crearSuma(aa, bb))
  }

  crearSuma(a: number, b: number): number {
    return a + b
  }
}
