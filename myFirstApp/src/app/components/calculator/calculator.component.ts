import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result:string
  constructor() { this.result = ''}

  ngOnInit(): void {
  }

  onClick($event:any){
    let n = $event.target.innerText
    this.result += n

  }

  reset(){
    this.result = ''
  }

  removeLast(){
    this.result = this.result.slice(0,-1)
  }
  calculate(){
    this.result = eval(this.result)
  }
}
