import { Injectable } from '@angular/core';
import { LIBROS } from '../models/libros.db';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { 
  }

  getBooksOf(escritorId:any){

    return LIBROS.filter((libro)=>libro.escritor==parseInt(escritorId))
  }

}
