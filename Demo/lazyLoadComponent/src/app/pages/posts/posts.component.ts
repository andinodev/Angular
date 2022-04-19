import { Component, OnInit } from '@angular/core';
import { DataService } from '../../serv/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any
  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    console.log('init')
    this.posts = this.dataServ.getPosts()
    console.log(this.posts)

    /*
    this.dataServ.getPosts().subscribe( (posts:any)=> {
        this.posts = posts
      }
    )
    */
  }

  listenPost(e:any){
    console.log('click en ',e)
  }


}
