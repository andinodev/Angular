export class Tarea{
    
    titulo: string
    desc: string
    finished: boolean = false

    constructor(pTitulo = '', pDesc = ''){
        this.titulo = pTitulo
        this.desc = pDesc
    }

    onFinish(){
        this.finished = true
    }

}