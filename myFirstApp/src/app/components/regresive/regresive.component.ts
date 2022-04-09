import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-regresive',
  templateUrl: './regresive.component.html',
  styleUrls: ['./regresive.component.css']
})
export class RegresiveComponent implements OnInit {

  isRunning: boolean
  realNumber:number
  @Input() numbers: string
  @Output() finishRegresive: EventEmitter<number>

  constructor() {
    this.isRunning = false
    this.numbers = '0'
    this.realNumber = 0
    this.finishRegresive = new EventEmitter()
  }
  ngOnInit(): void {
    this.realNumber = Number(this.numbers)
  }

  startRegresive() {
    console.log(this.realNumber)
    if (!this.isRunning) {
      let interval = setInterval(() => {
        if (this.realNumber < 1){
          this.finishRegresive.emit(this.realNumber)
          this.isRunning = false
          clearInterval(interval)
        }else{
          this.isRunning = true
          this.realNumber--
        }
      }, 1000)
    }
  }
}
