import { Component, OnInit } from '@angular/core';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-escritores',
  templateUrl: './escritores.component.html',
  styleUrls: ['./escritores.component.css'],
})
export class EscritoresComponent implements OnInit {
  escritores: Escritor[] = [];
  paises: string[] = [];
  seleccionado: string = '';

  constructor(private escService: EscritoresService) {}

  ngOnInit(): void {
    this.loadEscritores()
    .then();
    
  }

  async loadEscritores(country = '') {
    try {
      this.escritores = await this.escService.getAll(country);
      this.loadCountries()
    } catch (error) {
      console.log(error);
    }
  }
  
  loadCountries(){
    console.log('hola');
    this.escritores.forEach((element) => {
      if (!this.paises.includes(element.pais)) {
        console.log('el pais ' + element.pais + ' se incluye');
        this.paises.push(element.pais);
      }
    });
  }
}
