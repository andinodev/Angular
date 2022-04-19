import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:any
  @Output() postClicked:EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    console.log(this.post.id)
    this.postClicked.emit(this.post.id)
  }

}
