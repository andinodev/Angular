export class Escritor{

    id:number
    nombre: string
    apellidos: string
    imagen: string
    pais: string

    constructor(id:number,nombre:string,apellidos:string,imagen:string,pais:string){
        this.apellidos = apellidos
        this.id = id
        this.imagen = imagen
        this.nombre = nombre
        this.pais = pais
    }
}