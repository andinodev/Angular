import { Component } from '@angular/core';
import { RickymortyapiService } from './serv/rickymortyapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consumidorApi';
  rickapi: any[] | undefined = []
  constructor(private rickMorty:RickymortyapiService){}

  ngOnInit(){

      this.rickMorty.getAll()
      .then(elements => this.rickapi = elements)
      .catch(error => console.log(error))

  }
}
