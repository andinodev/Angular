import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable()
export class PersonasService {

  personas: Persona[]

  constructor() {
    this.personas = [
      new Persona('Daniel','Parra', 22, true),
      new Persona('Isaías','Oróstica',22,true),
      new Persona('Jesica','Oróstica',50,true),
      new Persona('Juan Carlos','Parra',55, true),
      new Persona('Persona','Baneada',69,false)
    ]
  }

  addWorker(persona:Persona){
    this.personas.push(persona)

  }
  getAll(onlyActive=false){
    if(onlyActive){
      return this.personas.filter((element)=>element.activo==true)
    }else{
      return this.personas
    }
    
  }

  activos(): Promise<Persona[]>{
    const prom = new Promise<Persona[]>((resolve,reject)=>{
      const arrTmp:Persona[] = []
      for(let persona of this.personas){
        if(persona.activo){
          arrTmp.push(persona)
        }
      }
      resolve(arrTmp)
    })
    return prom
  }

  getActive(): Promise<Persona[]>{
    return new Promise((resolve,reject)=>{
      resolve(this.personas.filter((persona)=>persona.activo))
    })
  }
}
