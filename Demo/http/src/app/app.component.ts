import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from './serv/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  posts: any[] | undefined = []
  formulario: FormGroup
  constructor(private postServ: PostsService) {
    this.formulario = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl('')
    })
  }

  ngOnInit() {
    console.log('on init')
    this.postServ.getAll()
      .then(posts => this.posts = posts)
      .catch(error => console.log(error))
  }

  async onClick(id: string) {
    try {
      const post = await this.postServ.getById(id)
      console.log(post)
    } catch (error) {
      console.log(error)
    }
  }

  onClickPost(){
    this.postServ.create({
      title: 'Nuevo titulo',
      body: 'Este es el cuerpo del post',
      userId: 1
    }).then(response => console.log(response))
    .catch(error => console.log(error))
  }
  
  async onSubmit(){
    try{
    const response = await this.postServ.create(this.formulario.value)
    console.log(response)
    }catch(error){
      console.log(error)
    }
  }
}
