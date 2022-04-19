import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados: Empleado[] = []

  constructor() {
   }

  submitEmployee(emp:Empleado){
    this.empleados.push(emp)
  }

  getEmployees():Promise<Empleado[]>{
    
    return new Promise<Empleado[]>((resolve,reject)=>resolve(this.empleados))
  }
}
