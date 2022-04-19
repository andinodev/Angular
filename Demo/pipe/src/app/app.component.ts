import { Component } from '@angular/core';
import { DataService } from './serv/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';

  /**
   * CurrencyPipe: para gestionar los tipos de monedas
   */

  precio: number

  /**
   * DecimalPipe:
   */

  numero: number

  /**
   * Datepipe
   */
  fechaActual: Date

  /**
   * PercentPipe
   */
  randomNum: number

  /**
   * JSONPipe
   */
  estudiante: any

  /**
   * Lower, upper y title Cases Pipe
   */
  muchotexto: string


  /**
   * SlicePipe: Pseudo Slice para los array
   */
  animales: string[]
  min: number 
  max: number 

  /**
   * AsyncPipe
   */
  promPosts: Promise<any[] | undefined>

  constructor(private data: DataService) {
    this.precio = 1289
    this.numero = 3.82838238238
    this.fechaActual = new Date()
    this.randomNum = Math.random()
    this.estudiante = {
      nombre: 'Papasito',
      apellido: 'Corazon',
      notas: [3, 4, 7, 10]
    }
    this.animales = ['perro','gato','loro','tortuga']
    this.min = 0
    this.max = this.animales.length
    this.muchotexto = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora corporis repellat modi fugiat, ipsa pariatur explicabo ducimus cum iure aliquid officiis dignissimos perferendis eos culpa exercitationem quibusdam accusamus maxime, nisi harum dolores porro dicta voluptatum. Amet hic beatae ducimus quasi ratione pariatur aperiam, cum dolore! Eum maxime ratione, voluptatum qui eligendi distinctio dolores molestias optio repudiandae veniam maiores temporibus, voluptatem atque iste debitis magnam voluptates architecto deleniti. Illum illo delectus, animi error mollitia eum officia obcaecati modi aperiam facilis dolor tempora, culpa ipsum. Tempore illum veniam expedita molestiae cupiditate perferendis, ipsum, temporibus quisquam soluta nesciunt neque repellendus. Itaque, a laboriosam!'
  
    this.promPosts = this.data.getPosts()
  }

  ngOnInit() {
    setInterval(() => {
      this.fechaActual = new Date()
    }, 1000)
  }
}
