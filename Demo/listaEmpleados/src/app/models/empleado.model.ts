export class Empleado{

    nombre:string = ''
    apellidos:string= ''
    email:string = ''
    edad:number = 0
    departamentoId:number = 0
    password:string = ''
    img: string = '' 

    constructor(nombre:string,apellidos:string,email:string,departamentoId:number,password:string,img:string){
        this.nombre = nombre
        this.apellidos = apellidos
        this.email = email
        this.departamentoId = departamentoId
        this.password = password
        this.img = img
    }

}