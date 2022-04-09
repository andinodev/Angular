import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  @Input() tasks: Tarea[] = []

  constructor() { }

  ngOnInit(): void {
  }

  remove(index:number){
    this.tasks.splice(index,1)

  }

}
