import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regresive',
  templateUrl: './regresive.component.html',
  styleUrls: ['./regresive.component.css']
})
export class RegresiveComponent implements OnInit {

  numbers: number
  isRunning: boolean
  constructor() {
    this.numbers = 10
    this.isRunning = false
  }
  ngOnInit(): void {
  }

  startRegresive() {
    if (!this.isRunning) {
      let interval = setInterval(() => {
        if (this.numbers < 1){
          this.isRunning = false
          clearInterval(interval)
        }else{
          this.isRunning = true
          this.numbers--
        }
      }, 1000)
    }
  }
}
