export class Conformidades{
    contrato:number
    fechaAsignacion:Date
    sistema:string
    norma:string
    moduloNorma:string
    puntoNorma:string
    creador:string
    tipo:boolean
    estado:number
    descripcion:string
    fechaCierre:Date

    constructor(contrato:number,fechaAsignacion:Date,sistema:string,norma:string,moduloNorma:string,puntoNorma:string,creador:string,tipo:boolean,estado:number,descripcion:string,fechaCierre:Date){
        this.contrato = contrato
        this.fechaAsignacion = fechaAsignacion
        this.sistema = sistema
        this.norma = norma
        this.moduloNorma = moduloNorma
        this.puntoNorma = puntoNorma
        this.creador = creador
        this.tipo = tipo
        this.estado = estado
        this.descripcion = descripcion
        this.fechaCierre = fechaCierre
    }
}